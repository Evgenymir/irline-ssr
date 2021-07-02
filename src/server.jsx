import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { createStore } from 'redux';
import { I18nextProvider } from 'react-i18next';
import Backend from 'i18next-fs-backend';
import i18nextMiddleware from 'i18next-http-middleware';
import i18n from './i18n';
import rootReducers from './redux-store';
import App from './App';
import renderTemplate from './renderTemplate';

const LANGUAGES = ['en', 'ru'];
const DEFAULT_LANGUAGE = 'ru';

const port = process.env.PORT || '3000';
const app = express();
const config = {
  debug: false,
  preload: LANGUAGES,
  fallbackLng: DEFAULT_LANGUAGE,
  ns: ['translations'],
  defaultNS: 'translations',
  backend: {
    loadPath: 'dist/locales/{{lng}}/{{ns}}.json',
    addPath: 'dist/locales/{{lng}}/{{ns}}.missing.json',
  },
};
const runApp = () => {
  app
    .disable('x-powered-by')
    .use(i18nextMiddleware.handle(i18n))
    .use('/locales', express.static('dist/locales'))
    .use(express.static('dist'))
    .get('*', async (req, res) => {
      const context = {};
      const store = createStore(rootReducers);
      const content = renderToString(
        <I18nextProvider i18n={req.i18n}>
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              <App />
            </StaticRouter>
          </Provider>
        </I18nextProvider>
      );
      const { url } = context;

      if (url) {
        res.redirect(url);
      } else {
        const initialI18nStore = {};
        req.i18n.languages.forEach((l) => {
          initialI18nStore[l] = req.i18n.services.resourceStore.data[l];
        });
        const initialLanguage = req.i18n.language;
        res.status(200).send(
          renderTemplate({
            cssPath: 'main.css',
            jsPath: 'main.js',
            content,
            initialI18nStore,
            initialLanguage,
          }),
        );
      }
    })
    .listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
};
i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(config, runApp);
