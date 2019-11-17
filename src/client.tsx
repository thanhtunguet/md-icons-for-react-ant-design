import * as React from 'react';
import {hydrate} from 'react-dom';
import {IconStories} from './stories';

hydrate(
  <IconStories/>,
  document.getElementById('root'),
);
