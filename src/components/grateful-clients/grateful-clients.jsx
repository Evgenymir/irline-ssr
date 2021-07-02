import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';
import LightBoxModal from '../light-box-modal';
import SliderArrowLeft from '../icons/slider-arrow-left';
import SliderButton from '../slider-button';
import SliderArrowRight from '../icons/slider-arrow-right';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  prevArrow: <SliderButton Icon={<SliderArrowLeft />} />,
  nextArrow: <SliderButton Icon={<SliderArrowRight />} />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const GratefulClients = (props) => {
  const {
    title,
    items,
  } = props;

  const [isModalOpened, setIsModalOpened] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [images, setImages] = React.useState([]);

  const handleModalOpen = (index) => (e) => {
    e.preventDefault();
    setIsModalOpened(true);
    setCurrentIndex(index);
  };
  const handleModalClose = () => {
    setIsModalOpened(false);
    setCurrentIndex(0);
  };

  React.useEffect(() => {
    const filteredImages = items.map((item) => item.IMG_BIG);
    setImages(filteredImages);
  }, []);

  return (
    <section
      className="grateful-clients"
      style={{ backgroundImage: 'url("./images/bg/gratitudes.jpg")' }}
    >
      <div className="container">
        <div className="grateful-clients__title title">
          {title}
        </div>
        <div className="grateful-clients__slider-block">
          <div className="grateful-clients__wrap">
            <SlickSlider className="grateful-clients__slider" {...sliderSettings}>
              {items.map(({
                ID, IMG, IMG_BIG, IMG_ALT,
              }, index) => (
                <div className="grateful-clients__slider-item" key={ID}>
                  <a
                    href={IMG_BIG}
                    onClick={handleModalOpen(index)}
                  >
                    <img
                      src={IMG}
                      alt={IMG_ALT}
                    />
                  </a>
                </div>
              ))}
            </SlickSlider>
          </div>
        </div>
        {isModalOpened && (
          <LightBoxModal
            items={images}
            currentItem={currentIndex}
            onClose={handleModalClose}
          />
        )}
      </div>
    </section>
  );
};

GratefulClients.defaultProps = {
  title: null,
  items: [],
};

GratefulClients.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    imgBig: PropTypes.string,
    imgAlt: PropTypes.string,
  })),
};

export default React.memo(GratefulClients);
