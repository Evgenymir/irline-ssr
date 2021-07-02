import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import isFunction from 'lodash/isFunction';

const Input = React.forwardRef((props, ref) => {
  const {
    className,
    id,
    type,
    name,
    placeholder,
    autoComplete,
    onChange,
    maxLength,
  } = props;

  const handleChange = (event) => isFunction(onChange) && onChange(event);

  return (
    <input
      className={cn('input', className)}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      ref={ref}
      onChange={handleChange}
      maxLength={maxLength}
    />
  );
});

Input.displayName = 'Input';

Input.defaultProps = {
  className: null,
  id: null,
  type: 'text',
  name: null,
  placeholder: null,
  autoComplete: null,
  onChange: null,
  maxLength: null,
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
};

export default Input;
