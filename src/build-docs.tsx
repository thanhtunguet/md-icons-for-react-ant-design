import {readFileSync} from 'fs';
import {writeFileSync} from 'fs';
import {compile} from 'handlebars';
import * as React from 'react';
import {renderToString} from 'react-dom/server';
import {IconStories} from './stories';

const docs = compile(readFileSync('templates/docs.hbs', {
  encoding: 'utf-8',
}).toString());
writeFileSync('docs/index.html', docs({
  reactDOM:  renderToString(
    <IconStories/>,
  ),
}));
