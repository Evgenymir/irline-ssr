import React from 'react';
import { useTranslation } from 'react-i18next';
import Contacts from '../../components/contacts';
import ContactForm from '../../components/forms/contact-form';
import sendData from '../../assets/js/send-data';
import ThanksBlock from '../../components/thanks-block';
import scrollPageTop from '../../assets/js/scrollPageTop';

const Contact = () => {
  const { i18n } = useTranslation('translations');
  const email = i18n.t('EMAIL');
  const phone = i18n.t('PHONE');
  const address = i18n.t('ADDRESS');
  const mapData = i18n.t('MAP');
  const thanksText = i18n.t('FORMS.THANKS_TEXT');

  const [fetching, setFetching] = React.useState(false);
  const [isThanksBlockShown, setIsThanksBlockShown] = React.useState(false);

  const handleContactFormSubmit = async (formData) => {
    setFetching(true);
    const { data, status } = await sendData(formData);
    setFetching(false);
    setIsThanksBlockShown(true);
    console.log(data, status);
  };

  const handleThanksBlockClose = () => {
    setIsThanksBlockShown(false);
  };

  React.useEffect(() => {
    scrollPageTop();
  }, []);

  return (
    <div className="page-wrapper contact-page">
      <Contacts
        email={email}
        phone={phone}
        address={address}
        map={mapData}
      />
      <div className="contact-page__content">
        <div className="container">
          <div className="contact-page__title">
            Обратная связь
          </div>
          {!isThanksBlockShown && (
            <ContactForm
              onSubmit={handleContactFormSubmit}
              isDisabled={fetching}
            />
          )}
          {isThanksBlockShown && (
            <ThanksBlock onClick={handleThanksBlockClose}>
              {thanksText}
            </ThanksBlock>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
