import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import NumberFormat from 'react-number-format';

const FieldInputMask = React.forwardRef((props, ref) => {
  const {
    className,
    id,
    type,
    name,
    placeholder,
    value,
    format,
    mask,
    onChange,
    error,
  } = props;

  return (
    <div className={cn('field-input', className)}>
      <NumberFormat
        className="input"
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onValueChange={(target) => onChange(target.value)}
        isNumericString
        type={type}
        format={format}
        mask={mask}
        ref={ref}
      />
      {error && (
        <span className="field-input__error">
          {error}
        </span>
      )}
    </div>
  );
});

FieldInputMask.displayName = 'FieldInputMask';

FieldInputMask.defaultProps = {
  className: null,
  id: null,
  type: 'text',
  name: null,
  placeholder: null,
  value: null,
  format: null,
  mask: null,
  onChange: null,
  error: null,
};

FieldInputMask.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  format: PropTypes.string,
  mask: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default FieldInputMask;
