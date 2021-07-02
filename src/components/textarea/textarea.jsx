import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import isFunction from 'lodash/isFunction';

const Textarea = React.forwardRef((props, ref) => {
  const {
    className,
    id,
    name,
    placeholder,
    onChange,
    maxLength,
  } = props;

  const handleChange = (event) => isFunction(onChange) && onChange(event);

  return (
    <textarea
      className={cn('textarea', className)}
      id={id}
      name={name}
      placeholder={placeholder}
      ref={ref}
      onChange={handleChange}
      maxLength={maxLength}
    />
  );
});

Textarea.displayName = 'Textarea';

Textarea.defaultProps = {
  className: null,
  id: null,
  name: null,
  placeholder: null,
  onChange: null,
  maxLength: null,
};

Textarea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
};

export default Textarea;
