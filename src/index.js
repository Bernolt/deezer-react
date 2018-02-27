import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { configureStore, history } from './store/configureStore';
import Root from './components/Root';

import './styles/main.scss';

const store = configureStore();

const renderRoot = () => render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root'),
);
renderRoot();

if (module.hot) {
  module.hot.accept('./components/Root', renderRoot());
}
