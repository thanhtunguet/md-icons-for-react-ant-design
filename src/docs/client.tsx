import * as React from 'react';
import { hydrate } from 'react-dom';
import IconStories from '../components/IconStories';

hydrate(
  <IconStories />,
  document.getElementById('root'),
);
