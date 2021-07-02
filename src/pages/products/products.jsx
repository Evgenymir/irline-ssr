import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import scrollPageTop from '../../assets/js/scrollPageTop';

const Products = () => {
  const { i18n } = useTranslation('translations');
  const title = i18n.t('PRODUCTS_PAGE.TITLE');
  const products = i18n.t('PRODUCTS_PAGE.PRODUCTS');

  React.useEffect(() => {
    scrollPageTop();
  }, []);

  return (
    <div className="page-wrapper product-page">
      <div className="container">
        <div className="product-page__title title">{title}</div>
        <div className="product-page__list">
          { products.map((product) => (
            <Link
              key={product.ID}
              to={(location) => ({ ...location, pathname: `${location.pathname}/${product.URL}` })}
              className="product-page__item"
            >
              <div className="product-page__item-title">
                {product.TITLE}
                <span
                  className="product-page__item-title-arrow"
                  style={{ backgroundImage: 'url("./images/arrowWhite.png")' }}
                />
              </div>
              <div className="product-page__item-img">
                <img src={product.IMG} alt={product.TITLE} />
              </div>
            </Link>
          )) }
        </div>
      </div>
    </div>
  );
};

export default Products;
