import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';

// import './app.global.css';s
import App from './src/App';

// const store = configuredStore();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () => {
  // // eslint-disable-next-line global-require
  // const Root = require('./containers/Root').default;
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
});
