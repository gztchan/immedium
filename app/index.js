import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';

import App from './components/App';

render(
  (<AppContainer>
    <App />
  </AppContainer>),
  document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default; // eslint-disable-line
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      div);
  });
}
