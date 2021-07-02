import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import isFunction from 'lodash/isFunction';

const StagesCooperationItem = (props) => {
  const {
    className,
    id,
    img,
    imgAlt,
    text,
    arrowImg,
    onClick,
  } = props;

  const handleClick = (event) => isFunction(onClick) && onClick(id)(event);

  return (
    <div className={cn('stages-cooperation-item', className)}>
      <span
        className="stages-cooperation-item__arrow"
        style={{ backgroundImage: `url(${arrowImg})` }}
      />
      <div className="stages-cooperation-item__img">
        <a
          className="stages-cooperation-item__link"
          href={id}
          onClick={handleClick}
        >
          <img src={img} alt={imgAlt} />
          <p dangerouslySetInnerHTML={{ __html: text }} />
        </a>
      </div>
    </div>
  );
};

StagesCooperationItem.defaultProps = {
  className: '',
  id: '',
  img: '',
  imgAlt: '',
  text: '',
  arrowImg: '',
  onClick: null,
};

StagesCooperationItem.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  text: PropTypes.string,
  arrowImg: PropTypes.string,
  onClick: PropTypes.func,
};

export default StagesCooperationItem;
