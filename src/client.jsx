import React from 'react';
import PropTypes from 'prop-types';
import thunk from 'redux-thunk';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import { useSSR } from 'react-i18next';
import App from './App';
import './i18n';
import './App.scss';
import rootReducers from './redux-store';

const BaseApp = (props) => {
  const { store } = props;
  useSSR(window.initialI18nStore, window.initialLanguage);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  ),
);
/* eslint-enable */

BaseApp.defaultProps = {
  store: {},
};

BaseApp.propTypes = {
  store: PropTypes.objectOf(PropTypes.any),
};

hydrate(
  <BaseApp store={store} />,
  document.getElementById('root'),
);
