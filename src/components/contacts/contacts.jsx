import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Button from '../button';
import YandexMap from '../yandex-map';
import getPhoneNormalized from '../../assets/js/get-phone-normalized';

const Contacts = (props) => {
  const {
    className,
    map,
    address,
    email,
    phone,
    callBack,
    onClick,
  } = props;

  const emailNormalized = `mailto:${email}`;
  const phoneNormalized = `tel:${getPhoneNormalized(phone)}`;

  return (
    <section className={cn('contacts-section', className)}>
      <YandexMap
        center={map?.CENTER}
        zoom={map?.ZOOM}
        title={map?.TITLE}
        content={map?.CONTENT}
      />
      <div className="contacts-section__content">
        <p>{address}</p>
        <a
          className="contacts-section__email"
          href={emailNormalized}
        >
          e-mail:&nbsp;
          {email}
        </a>
        <a
          className="contacts-section__phone"
          href={phoneNormalized}
        >
          {phone}
        </a>
        {onClick && (
          <Button
            type="button"
            onClick={onClick}
            className="contacts-section__button"
          >
            {callBack?.NAME}
          </Button>
        )}
      </div>
    </section>
  );
};

Contacts.defaultProps = {
  className: '',
  map: {},
  address: '',
  email: '',
  phone: '',
  callBack: {
    name: '',
    link: '',
  },
  onClick: null,
};

Contacts.propTypes = {
  className: PropTypes.string,
  map: PropTypes.shape({
    CENTER: PropTypes.arrayOf(PropTypes.number),
    ZOOM: PropTypes.number,
    CONTENT: PropTypes.string,
    TITLE: PropTypes.string,
  }),
  address: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  callBack: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func,
};

export default Contacts;
