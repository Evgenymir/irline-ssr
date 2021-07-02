import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = (props) => {
  const { className } = props;
  const { i18n } = useTranslation('translations');
  const menuItems = i18n.t('FOOTER');
  const copyRight = i18n.t('COPYRIGHT');
  return (
    <footer className={cn('footer', className)}>
      <div className="container">
        <div className="footer__content">
          { menuItems.map(({
            TITLE, ITEMS,
          }) => (
            <div
              className="footer__item"
              key={TITLE}
            >
              <div className="footer__item-title">
                {TITLE}
              </div>
              <ul>
                {ITEMS.map(({
                  TEXT, LINK,
                }) => (
                  <li key={TEXT}>
                    <Link to={LINK}>
                      {TEXT}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )) }
          <div className="footer__item">
            <div className="footer__item-copy">
              <p>
                {copyRight?.YEAR}
              </p>
              <p>
                {copyRight?.TEXT}
              </p>
              <Link
                to={copyRight?.LINK?.HREF}
                className="footer__item-policy"
              >
                {copyRight?.LINK?.TEXT}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  className: '',
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
