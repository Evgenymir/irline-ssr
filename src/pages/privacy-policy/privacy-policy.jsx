import React from 'react';
import { useTranslation } from 'react-i18next';
import scrollPageTop from '../../assets/js/scrollPageTop';

const PrivacyPolicy = () => {
  const { i18n } = useTranslation('translations');
  const title = i18n.t('PRIVACY_POLICY.TITLE');
  const text = i18n.t('PRIVACY_POLICY.TEXT');

  React.useEffect(() => {
    scrollPageTop();
  }, []);

  return (
    <div className="page-wrapper privacy-policy">
      <div className="container">
        <div className="privacy-policy__title">{title}</div>
        <div className="privacy-policy__content" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
