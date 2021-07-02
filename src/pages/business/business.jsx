import React from 'react';
import { useTranslation } from 'react-i18next';

const Business = () => {
  const { i18n } = useTranslation('translations');
  const title = i18n.t('BUSINESS_PAGE.TITLE');

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="title">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Business;
