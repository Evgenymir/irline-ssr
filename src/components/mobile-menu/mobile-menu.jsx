import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../button';

const MobileMenu = (props) => {
  const {
    className,
    items,
    callBackName,
    orderName,
    phone,
    phoneNormalized,
    onCallBackClick,
    onOrderClick,
    onClose,
  } = props;

  const { i18n } = useTranslation('translations');
  const body = document.querySelector('body');

  const [menuShown, setMenuShown] = React.useState(false);

  React.useEffect(() => {
    body.classList.add('is-scroll-blocked');
    setMenuShown(true);
  }, []);

  const changeLanguage = (language) => () => {
    i18n.changeLanguage(language);
  };
  const handleClose = () => {
    setMenuShown(false);
    setTimeout(() => {
      body.classList.remove('is-scroll-blocked');
      onClose(false);
    }, 300);
  };

  return (
    <CSSTransition
      in={menuShown}
      timeout={300}
      classNames="mobile-menu-animation"
    >
      <div className={cn('mobile-menu-wrapper', className)}>
        <div className="mobile-menu">
          <div
            className="mobile-menu__close"
            onClick={handleClose}
            onKeyPress={handleClose}
            role="button"
            tabIndex={0}
          >
            <div className="mobile-menu__close-line" />
            <div className="mobile-menu__close-line" />
          </div>
          <ul className="mobile-menu__list">
            {items.map(({ id, title, link }) => (
              <li className="mobile-menu__list-item" key={id}>
                <NavLink
                  to={link}
                  className="mobile-menu__list-link"
                  activeClassName="is-active"
                  onClick={handleClose}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__links">
            {callBackName && (
              <Button
                type="button"
                onClick={onCallBackClick}
                className="mobile-menu__button button--red"
              >
                {callBackName}
              </Button>
            )}
            {phone && (
              <a
                href={`tel:${phoneNormalized}`}
                className="mobile-menu__link-phone"
              >
                {phone}
              </a>
            )}
            {orderName && (
              <Button
                type="button"
                onClick={onOrderClick}
                className="mobile-menu__button button--red"
              >
                {orderName}
              </Button>
            )}
          </div>
          <div className="mobile-menu__languages">
            <button
              type="button"
              onClick={changeLanguage('en')}
            >
              EN
            </button>
            <button
              type="button"
              onClick={changeLanguage('ru')}
            >
              RU
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

MobileMenu.defaultProps = {
  className: '',
  items: [],
  callBackName: null,
  orderName: null,
  phone: null,
  phoneNormalized: '',
  onCallBackClick: null,
  onOrderClick: null,
  onClose: null,
};

MobileMenu.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
  })),
  callBackName: PropTypes.string,
  orderName: PropTypes.string,
  phone: PropTypes.string,
  phoneNormalized: PropTypes.string,
  onCallBackClick: PropTypes.func,
  onOrderClick: PropTypes.func,
  onClose: PropTypes.func,
};

export default MobileMenu;
