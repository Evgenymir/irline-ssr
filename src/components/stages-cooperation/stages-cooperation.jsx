import React from 'react';
import PropTypes from 'prop-types';
import StagesCooperationItem from './components/stages-cooperation-item';
import PopupStage from '../popup/popup-stage';

const StagesCooperation = (props) => {
  const {
    title,
    items,
    contents,
  } = props;

  const [isModalAnimated, setIsModalAnimated] = React.useState(false);
  const [isModalOpened, setIsModalOpened] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({});

  const handlePopupOpen = (id) => (event) => {
    event.preventDefault();
    const currentContent = contents.find((item) => item.STAGE_ID === id);
    if (!currentContent) {
      return;
    }
    setTimeout(() => {
      setIsModalAnimated(true);
    }, 100);
    setIsModalOpened(true);
    setModalContent(currentContent);
  };

  const handlePopupClose = () => {
    setIsModalAnimated(false);
    setTimeout(() => {
      setIsModalOpened(false);
      setModalContent({});
    }, 300);
  };

  return (
    <section className="stages-cooperation">
      <div className="container">
        <div className="stages-cooperation__title title">
          <h3>{title}</h3>
        </div>
        <div className="stages-cooperation__block">
          {items.map((item) => (
            <StagesCooperationItem
              key={item.ID}
              id={item.ID}
              img={item.IMG}
              imgAlt={item.IMG_ALT}
              text={item.TEXT}
              arrowImg={item.ARROW_IMG}
              onClick={handlePopupOpen}
            />
          ))}
          {isModalOpened && (
            <PopupStage
              title={modalContent.TITLE}
              img={modalContent.IMG}
              onClose={handlePopupClose}
              isAnimated={isModalAnimated}
            >
              {modalContent.CONTENT}
            </PopupStage>
          )}
        </div>
      </div>
    </section>
  );
};

StagesCooperation.defaultProps = {
  title: '',
  items: [],
  contents: [],
};

StagesCooperation.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  contents: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default StagesCooperation;
