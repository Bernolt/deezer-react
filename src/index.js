import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './index.scss';
import { configureStore, history } from './store/configureStore';
import Root from './components/Root';

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
