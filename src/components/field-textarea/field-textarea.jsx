import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Textarea from '../textarea';

const FieldTextarea = React.forwardRef((props, ref) => {
  const {
    className,
    id,
    name,
    placeholder,
    value,
    onChange,
    error,
    maxLength,
  } = props;

  return (
    <div className={cn('field-textarea', className)}>
      <Textarea
        ref={ref}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
      {error && (
        <span className="field-textarea__error">
          {error}
        </span>
      )}
    </div>
  );
});

FieldTextarea.displayName = 'FieldTextarea';

FieldTextarea.defaultProps = {
  className: null,
  id: null,
  name: null,
  placeholder: null,
  value: '',
  onChange: null,
  error: null,
  maxLength: null,
};

FieldTextarea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  maxLength: PropTypes.number,
};

export default FieldTextarea;
