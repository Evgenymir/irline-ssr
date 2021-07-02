import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const AboutCompany = (props) => {
  const {
    className,
    title,
    items,
  } = props;

  return (
    <section className={cn('about', className)}>
      <div className="container">
        {title && (
          <div className="about__title title">
            <h3>{title}</h3>
          </div>
        )}
        <div className="about__content">
          {items.map(({
            NUMBER, TEXT, IMG, IMG_ALT,
          }) => (
            <div
              className="about__item"
              key={NUMBER}
            >
              <div className="about__item-img">
                <img src={IMG} alt={IMG_ALT} />
              </div>
              <div className="about__item-text">
                <p className="about__item-text-p" dangerouslySetInnerHTML={{ __html: TEXT }} />
                <span className="about__item-text-span">
                  <span
                    className="about__item-text-arrow"
                    style={{ backgroundImage: 'url(./images/arrowSmallRed.png)' }}
                  />
                  {NUMBER}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

AboutCompany.defaultProps = {
  className: '',
  title: null,
  items: [],
};

AboutCompany.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    NUMBER: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
    imgAlt: PropTypes.string,
  })),
};

export default AboutCompany;
