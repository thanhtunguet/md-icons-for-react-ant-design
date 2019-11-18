import {IconDefinition} from '@ant-design/icons-svg/lib/types';
import cheerio from 'cheerio';
import {execSync} from 'child_process';
import {readFileSync, writeFileSync} from 'fs';
import {compile} from 'handlebars';
import {camelCase, kebabCase} from 'lodash';
import {encodingOptions} from '../consts/encoding';
import {pascalCase} from '../helpers/pascal-case';

export function transform() {
  const echoCommand: string = 'echo material-design-icons/*/svg/production/ic_*_*px.svg';

  const pattern: RegExp = /^material-design-icons\/([a-zA-z0-9_]+)\/svg\/production\/ic_([a-zA-z0-9_]+)_([0-9]{2})px\.svg$/gm;

  const svgList: string = execSync(echoCommand, encodingOptions).toString().split(' ').join('\n');

  interface Icon {
    size: string;
    path: string;
  }

  const icons: { [key: string]: Icon } = {};

  const matches: string[] = svgList.match(pattern);

  matches.forEach((path: string) => {
    const [, , icon, size] = (new RegExp(pattern)).exec(path);
    if (!icons.hasOwnProperty(icon)) {
      icons[icon] = {
        size,
        path,
      };
    }
    if (icons[icon].size < size) {
      icons[icon] = {
        size,
        path,
      };
    }
  });

  const antIcons: IconDefinition[] = Object
    .entries(icons)
    .map(([key, {path}]) => {
      const content: string = readFileSync(path, encodingOptions);
      const $ = cheerio.load(content);
      const name: string = kebabCase(`mat_${key}`).replace('3-d', '3d');
      const svg = $($('svg')[0]);
      let children = [];
      $('path').map(function () {
        const path = $(this);
        const attrs = {};
        Object
          .entries(path.attr())
          .forEach(([key, value]) => {
            attrs[camelCase(key)] = value;
          });
        children = [
          ...children,
          {
            tag: 'path',
            attrs,
          },
        ];
      });
      const attrs = {};
      Object
        .entries(svg.attr())
        .forEach(([key, value]) => {
          attrs[camelCase(key)] = value;
        });
      return {
        name,
        theme: 'outline',
        icon: {
          tag: 'svg',
          attrs,
          children,
        },
      };
    });

  const compileIcon = compile(readFileSync('./templates/icon.hbs', encodingOptions));
  const compilePublicAPIs = compile(readFileSync('./templates/public.hbs', encodingOptions));

  antIcons.forEach((icon: IconDefinition) => {
    const {name} = icon;
    const content = compileIcon({
      icon: JSON.stringify(icon, null, 2),
      name: pascalCase(name),
    });
    const filename: string = `icons/${name}.ts`;
    // tslint:disable-next-line:no-console
    console.info('Writing file %s', filename);
    writeFileSync(`icons/${name}.ts`, content);
  });

  const content: string = compilePublicAPIs({
    icons: antIcons.map((icon: IconDefinition) => ({
      ...icon,
      pascalCaseName: pascalCase(icon.name),
    })),
  });
// tslint:disable-next-line:no-console
  console.info('Writing public exports');
  writeFileSync('src/public.ts', content);

// tslint:disable-next-line:no-console
  console.error('Linting files');
  try {
    execSync(`yarn tslint icons/**.ts --fix`);
    execSync(`yarn tslint src/public.tsx --fix`);
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error('Linting file % failed');
  }
}
