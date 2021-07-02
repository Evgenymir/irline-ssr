import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import LogoIcon from '../icons/logo-icon';
import LogoGreyIcon from '../icons/logo-grey-icon';
import Logo from '../logo';
import Menu from '../menu';
import Burger from '../burger';
import Button from '../button';
import getPhoneNormalized from '../../assets/js/get-phone-normalized';
import {
  setModalToggle,
  setModalName,
} from '../../redux-store/modal/actions';
import { isModalShownSelector } from '../../redux-store/modal/selectors';
import FORMS_NAMES from '../../constants/forms-names';
import MobileMenu from '../mobile-menu';

const Header = (props) => {
  const {
    innerPage,
  } = props;
  const { i18n } = useTranslation('translations');
  const menuItems = i18n.t('MENU');
  const callBack = i18n.t('CALLBACK');
  const callBackName = callBack?.NAME;
  const order = i18n.t('ORDER');
  const orderName = order?.NAME;
  const phone = i18n.t('PHONE');
  const phoneNormalized = getPhoneNormalized(phone);
  const dispatch = useDispatch();
  const isModalShown = useSelector(isModalShownSelector());

  const [scroll, setScroll] = React.useState(false);
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  const changeLanguage = (language) => () => {
    i18n.changeLanguage(language);
  };
  const checkAndSetScroll = () => {
    const isScroll = window.pageYOffset >= 70;
    setScroll(isScroll);
  };
  const handleMenuToggle = () => {
    setIsMenuOpened(!isMenuOpened);
  };
  const handleCallBackButtonClick = () => {
    dispatch(setModalToggle(!isModalShown));
    dispatch(setModalName(FORMS_NAMES.CALL_BACK));
  };
  const handleOrderButtonClick = () => {
    dispatch(setModalToggle(!isModalShown));
    dispatch(setModalName(FORMS_NAMES.ORDER_PROJECT));
  };

  React.useEffect(() => {
    if (innerPage) {
      setScroll(false);
      return;
    }

    window.addEventListener('scroll', checkAndSetScroll);

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('scroll', checkAndSetScroll);
    };
  }, [innerPage]);

  return (
    <>
      <header className={`header ${innerPage || scroll ? 'header--white' : ''}`}>
        <div className="container">
          <div className="header__wrap">
            <div className="header__left">
              <Logo Icon={!scroll && !innerPage
                ? <LogoIcon />
                : <LogoGreyIcon />}
              />
              <Menu menu={menuItems} />
              <Burger onClick={handleMenuToggle} />
            </div>
            <div className="header__right">
              {callBackName && (
                <Button
                  type="button"
                  className="header__callBack"
                  onClick={handleCallBackButtonClick}
                >
                  {callBackName}
                </Button>
              )}
              {phone && (
                <a
                  href={`tel:${phoneNormalized}`}
                  className="header__phone"
                >
                  {phone}
                </a>
              )}
              {orderName && (
                <Button
                  type="button"
                  className="header__order button--red"
                  onClick={handleOrderButtonClick}
                >
                  {orderName}
                </Button>
              )}
            </div>
            <div className="header__languages">
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
      </header>
      {isMenuOpened && (
        <MobileMenu
          items={menuItems}
          callBackName={callBackName}
          orderName={orderName}
          phone={phone}
          phoneNormalized={phoneNormalized}
          onCallBackClick={handleCallBackButtonClick}
          onOrderClick={handleOrderButtonClick}
          onClose={handleMenuToggle}
        />
      )}
    </>
  );
};

Header.defaultProps = {
  innerPage: false,
};

Header.propTypes = {
  innerPage: PropTypes.bool,
};

export default Header;
