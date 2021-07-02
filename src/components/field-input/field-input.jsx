import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Input from '../input';

const FieldInput = React.forwardRef((props, ref) => {
  const {
    className,
    id,
    type,
    name,
    placeholder,
    value,
    onChange,
    autoComplete,
    error,
    maxLength,
  } = props;

  return (
    <div className={cn('field-input', className)}>
      <Input
        ref={ref}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        maxLength={maxLength}
      />
      {error && (
        <span className="field-input__error">
          {error}
        </span>
      )}
    </div>
  );
});

FieldInput.displayName = 'FieldInput';

FieldInput.defaultProps = {
  className: null,
  id: null,
  type: 'text',
  name: null,
  placeholder: null,
  value: '',
  onChange: null,
  autoComplete: null,
  error: null,
  maxLength: null,
};

FieldInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  autoComplete: PropTypes.string,
  error: PropTypes.string,
  maxLength: PropTypes.number,
};

export default FieldInput;
