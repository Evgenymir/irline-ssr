import React from 'react';
import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';
import Lightbox from 'react-image-lightbox';

const LightBoxModal = (props) => {
  const {
    items,
    currentItem,
    onClose,
  } = props;
  const handleClose = () => isFunction(onClose) && onClose();
  const [index, setIndex] = React.useState(currentItem);

  return (
    <Lightbox
      mainSrc={items[index]}
      nextSrc={items[(index + 1) % items.length]}
      prevSrc={items[(index + items.length - 1) % items.length]}
      onCloseRequest={handleClose}
      onMovePrevRequest={() => setIndex(
        (index + items.length - 1) % items.length,
      )}
      onMoveNextRequest={() => setIndex(
        (index + 1) % items.length,
      )}
    />
  );
};

LightBoxModal.defaultProps = {
  items: [],
  currentItem: 0,
  onClose: null,
};

LightBoxModal.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  currentItem: PropTypes.number,
  onClose: PropTypes.func,
};

export default LightBoxModal;
