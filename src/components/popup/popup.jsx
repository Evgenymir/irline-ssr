import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { useDispatch } from 'react-redux';
import { setModalName, setModalToggle } from '../../redux-store/modal/actions';

const Popup = (props) => {
  const {
    title,
    children,
  } = props;
  const dispatch = useDispatch();
  const body = document.querySelector('body');

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    body.classList.add('is-scroll-blocked');
    setShowPopup(true);
  }, []);

  const handleCloseModal = () => {
    setShowPopup(false);
    setTimeout(() => {
      body.classList.remove('is-scroll-blocked');
      dispatch(setModalToggle(false));
      dispatch(setModalName(null));
    }, 300);
  };

  return (
    <CSSTransition
      in={showPopup}
      timeout={300}
      classNames="popup-animation"
    >
      <div className="popup-wrapper">
        <div className="popup">
          <button
            type="button"
            className="popup__close"
            onClick={handleCloseModal}
          >
            <span className="popup__close-line" />
            <span className="popup__close-line" />
          </button>
          <div className="popup__title">{title}</div>
          {children && (
            <div className="popup__content">
              {children}
            </div>
          )}
        </div>
      </div>
    </CSSTransition>
  );
};

Popup.defaultProps = {
  title: null,
  children: null,
};

Popup.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Popup;
