// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { applyMiddleware, compose, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import { I18nextProvider } from 'react-i18next';
// import rootReducers from './reducers';
// import i18n from 'i18next';
// import App from './App.jsx';
// // import { getPhones } from './actions';
//
// /* eslint-disable no-underscore-dangle */
// const store = createStore(
//   rootReducers,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
//   ),
// );
// /* eslint-enable */
//
// // store.dispatch(getPhones());
//
// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <I18nextProvider i18n={i18n}>
//         <App />
//       </I18nextProvider>
//     </Router>
//   </Provider>,
//   document.getElementById('react-root'),
// );
