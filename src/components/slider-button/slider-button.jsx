import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const SliderButton = (props) => {
  const {
    className,
    style,
    onClick,
    Icon,
  } = props;

  return (
    <button
      type="button"
      className={cn('slider-button', className)}
      style={{ ...style }}
      onClick={onClick}
    >
      {Icon}
    </button>
  );
};

SliderButton.defaultProps = {
  className: '',
  style: null,
  onClick: null,
  Icon: null,
};

SliderButton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  onClick: PropTypes.func,
  Icon: PropTypes.element,
};

export default SliderButton;
