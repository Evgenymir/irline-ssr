import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import SlickSlider from 'react-slick';
import Button from '../button/button';
import SliderButton from '../slider-button';
import SliderArrowLeft from '../icons/slider-arrow-left';
import SliderArrowRight from '../icons/slider-arrow-right';

const sliderSettings = {
  dots: false,
  infinite: true,
  fade: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <SliderButton Icon={<SliderArrowLeft />} />,
  nextArrow: <SliderButton Icon={<SliderArrowRight />} />,
};

const MainScreen = (props) => {
  const {
    className,
    sliderItems,
    innerPage,
    onClick,
  } = props;

  return (
    <section
      className={cn([
        'main-screen',
        innerPage && 'main-screen--inner',
        className,
      ])}
    >
      <div className="main-screen__wrap">
        <SlickSlider
          className="main-screen__slider"
          {...sliderSettings}
        >
          {sliderItems.map(({
            id, text, linkText, img,
          }) => (
            <div key={id}>
              <div
                className="main-screen__slider-item"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div
                  className="main-screen__slider-item-title"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
                {!innerPage && (
                  <Button
                    type="button"
                    onClick={onClick}
                    className="main-screen__slider-item-link button--red"
                  >
                    {linkText}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </SlickSlider>
      </div>
    </section>
  );
};

MainScreen.defaultProps = {
  className: '',
  sliderItems: [],
  innerPage: false,
  onClick: null,
};

MainScreen.propTypes = {
  className: PropTypes.string,
  sliderItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string,
    img: PropTypes.string,
  })),
  innerPage: PropTypes.bool,
  onClick: PropTypes.func,
};

export default MainScreen;
