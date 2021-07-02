import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Button from '../button';

const ThanksBlock = (props) => {
  const {
    children,
    onClick,
  } = props;

  const { i18n } = useTranslation('translations');
  const closeText = i18n.t('FORMS.CLOSE');

  return (
    <div className="thanks-block">
      <div className="thanks-block__text">
        {children}
      </div>
      { onClick && (
        <Button
          onClick={onClick}
          type="button"
          className="thanks-block__button button--red"
        >
          {closeText}
        </Button>
      )}
    </div>
  );
};

ThanksBlock.defaultProps = {
  children: null,
  onClick: null,
};

ThanksBlock.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default ThanksBlock;
