import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './index.scss';
// require('./favicon.ico'); // Tell webpack to load favicon.ico

render(
  <AppContainer>
    <div>Hello world</div>
  </AppContainer>,
  document.getElementById('app')
);
