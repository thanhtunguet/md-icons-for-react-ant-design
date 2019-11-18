import {readFileSync, writeFileSync} from 'fs';
import {compile} from 'handlebars';
import * as React from 'react';
import {renderToString} from 'react-dom/server';
import IconStories from '../components/IconStories';
import {encodingOptions} from '../consts/encoding';

export function buildDocs() {

  const docsTemplate: string = readFileSync('./templates/docs.hbs', encodingOptions).toString();
  const compileDocs = compile(docsTemplate);

  writeFileSync('./docs/index.html', compileDocs({
    reactDOM: renderToString(
      <IconStories/>,
    ),
  }));
}
