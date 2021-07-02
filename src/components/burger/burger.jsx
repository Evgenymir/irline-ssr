import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import isFunction from 'lodash/isFunction';

const Burger = (props) => {
  const {
    className,
    onClick,
  } = props;

  const handleClick = () => isFunction(onClick) && onClick();
  const handleKeyPress = () => isFunction(onClick) && onClick();

  return (
    <div
      className={cn('burger', className)}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
    >
      <div className="burger__line" />
      <div className="burger__line" />
      <div className="burger__line" />
    </div>
  );
};

Burger.defaultProps = {
  className: '',
  onClick: null,
};

Burger.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Burger;
