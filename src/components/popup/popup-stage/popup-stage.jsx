import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import isFunction from 'lodash/isFunction';
import { CSSTransition } from 'react-transition-group';

const PopupStage = (props) => {
  const {
    title,
    children,
    img,
    isAnimated,
    onClose,
  } = props;

  const body = document.querySelector('body');
  const handleClose = () => isFunction(onClose) && onClose();

  React.useEffect(() => {
    body.classList.add('is-scroll-blocked');
    return () => {
      body.classList.remove('is-scroll-blocked');
    };
  }, []);

  return (
    <CSSTransition
      in={isAnimated}
      timeout={300}
      unmountOnExit
      classNames="popup-stage-animation"
    >
      <div className={cn([
        'popup-stage-wrapper',
        isAnimated && 'popup-stage-wrapper__animated',
      ])}
      >
        <div className="popup-stage">
          <button
            type="button"
            className="popup-stage__close"
            onClick={handleClose}
          >
            <span className="popup-stage__close-line" />
            <span className="popup-stage__close-line" />
          </button>
          <div className="title">
            {title}
          </div>
          <div className="popup-stage__content">
            <div className="popup-stage__img">
              <img
                src={img}
                alt={title}
              />
            </div>
            <div className="popup-stage__text">
              {children}
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

PopupStage.defaultProps = {
  title: '',
  children: null,
  img: '',
  isAnimated: false,
  onClose: null,
};

PopupStage.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  img: PropTypes.string,
  isAnimated: PropTypes.bool,
  onClose: PropTypes.func,
};

export default PopupStage;
