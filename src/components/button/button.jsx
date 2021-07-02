import React from 'react';
import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';
import cn from 'classnames';

const Button = (props) => {
  const {
    type,
    isDisabled,
    link,
    children,
    className,
    onClick,
  } = props;

  const isSubmit = type === 'submit';
  const isButton = type === 'button';

  const handleClick = () => isFunction(onClick) && onClick();

  return (
    <>
      {isSubmit && (
        <button
          type="submit"
          className={cn('button', className)}
          disabled={isDisabled}
        >
          {children}
        </button>
      )}
      {isButton && (
        <button
          type="button"
          className={cn('button', className)}
          onClick={handleClick}
        >
          {children}
        </button>
      )}
      {link && (
        <a
          href={link}
          className={cn('button', className)}
        >
          {children}
        </a>
      )}
    </>
  );
};

Button.defaultProps = {
  className: '',
  type: '',
  isDisabled: null,
  onClick: null,
  link: '',
  children: null,
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  link: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
