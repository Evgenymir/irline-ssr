import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SlickSlider from 'react-slick';
import SliderButton from '../../components/slider-button';
import SliderArrowLeft from '../../components/icons/slider-arrow-left';
import SliderArrowRight from '../../components/icons/slider-arrow-right';
import scrollPageTop from "../../assets/js/scrollPageTop";

const sliderSettings = {
  customPaging(i) {
    return (
      <img src={`/images/productCardSlideSmall${i + 1}.jpg`} alt="Каринка" />
    );
  },
  dots: true,
  dotsClass: 'product-card__slider-dots',
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <SliderButton Icon={<SliderArrowLeft />} />,
  nextArrow: <SliderButton Icon={<SliderArrowRight />} />,
};

const ProductCard = (props) => {
  const { match } = props;
  const cardName = match?.params?.name ?? '';
  const cardNameLowerCased = cardName?.toLowerCase();
  const { i18n } = useTranslation('translations');
  const descriptionText = i18n.t('PRODUCT_CARD_PAGE.DESCRIPTION');
  const backText = i18n.t('PRODUCT_CARD_PAGE.BACK_TEXT');
  const productCards = i18n.t('PRODUCT_CARD_PAGE.CARDS');

  const [cardData, setCardData] = React.useState(null);

  React.useEffect(() => {
    scrollPageTop();
    const currentProduct = productCards.find(
      (item) => item?.ID?.toLowerCase() === cardNameLowerCased,
    );
    if (!currentProduct) {
      setCardData(null);
      return;
    }
    setCardData(currentProduct);
  }, [
    cardNameLowerCased,
  ]);

  return cardData && (
    <div className="page-wrapper product-card">
      <div className="container">
        <div className="product-card__title title">
          {cardData.TITLE}
        </div>
        <div className="product-card__content">
          <div className="product-card__left">
            <div className="product-card__content-title">
              {descriptionText}
            </div>
            <div className="product-card__desc">
              {cardData.DESCRIPTION}
            </div>
          </div>
          <div className="product-card__right">
            <SlickSlider
              className="product-card__slider"
              {...sliderSettings}
            >
              {cardData?.IMAGES?.BIG?.map((item) => (
                <div key={cardData.ID + item}>
                  <img
                    src={item}
                    alt="картинка"
                  />
                </div>
              )) }
            </SlickSlider>
            <div
              className="product-card__back"
              style={{ backgroundImage: 'url("/images/productCardArrowBack.png")' }}
            >
              <Link to="/products">
                {backText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  match: {},
};

ProductCard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

export default ProductCard;
