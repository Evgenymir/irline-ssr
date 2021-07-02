import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { i18n } = useTranslation('translations');
  const title = i18n.t('NOT_FOUND.ERROR_NUMBER');
  const text = i18n.t('NOT_FOUND.TEXT');
  const buttonUrl = i18n.t('NOT_FOUND.BUTTON_URL');
  const buttonText = i18n.t('NOT_FOUND.BUTTON_TEXT');

  return (
    <div className="page-wrapper not-found">
      <div className="container">
        <div className="not-found__title">
          <span>{title}</span>
          {text}
        </div>
        <Link
          to={buttonUrl}
          className="not-found__button button button--red"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
