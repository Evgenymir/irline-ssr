import React from 'react';
import { useTranslation } from 'react-i18next';
import MainScreen from '../../components/main-screen';
import AboutCompany from '../../components/about-company';
import GratefulClients from '../../components/grateful-clients';
import LightBoxModal from '../../components/light-box-modal';
import scrollPageTop from '../../assets/js/scrollPageTop';

const AboutPage = () => {
  const { i18n } = useTranslation('translations');
  const sliderItems = i18n.t('MAIN_SLIDER');
  const aboutCompanyData = i18n.t('ABOUT_COMPANY');
  const gratefulClientsData = i18n.t('GRATEFUL_CLIENTS');
  const title = i18n.t('ABOUT_PAGE.TITLE');
  const text = i18n.t('ABOUT_PAGE.TEXT');
  const moreDetails = i18n.t('ABOUT_PAGE.MORE_DETAILS');
  const certificates = i18n.t('ABOUT_PAGE.CERTIFICATES');

  const [certificateImages, setCertificateImages] = React.useState([]);
  const [isModalOpened, setIsModalOpened] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

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
    scrollPageTop();
    const filteredImages = certificates.map((item) => item.IMG_BIG);
    setCertificateImages(filteredImages);
  }, []);

  return (
    <>
      <MainScreen
        innerPage
        sliderItems={sliderItems}
      />
      <AboutCompany
        title={aboutCompanyData?.TITLE}
        items={aboutCompanyData?.ITEMS}
      />
      <div className="about-page">
        <div className="container">
          <div className="about-page__content">
            <div className="about-page__left">
              <div className="about-page__title">
                {title}
              </div>
              <div className="about-page__desc">
                <p dangerouslySetInnerHTML={{ __html: text }} />
                <a href={moreDetails.LINK} target="_blank" rel="noreferrer">
                  {moreDetails.TEXT}
                </a>
              </div>
            </div>
            <div className="about-page__right">
              <div className="about-page__certificate">
                { certificates.map((item, index) => (
                  <a
                    href={item.IMG_BIG}
                    key={item.ID}
                    onClick={handleModalOpen(index)}
                  >
                    <img
                      src={item.IMG}
                      alt={item.IMG_ALT}
                    />
                  </a>
                )) }
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpened && (
        <LightBoxModal
          items={certificateImages}
          currentItem={currentIndex}
          onClose={handleModalClose}
        />
      )}
      <GratefulClients
        title={gratefulClientsData?.TITLE}
        items={gratefulClientsData?.ITEMS}
      />
    </>
  );
};

export default AboutPage;
