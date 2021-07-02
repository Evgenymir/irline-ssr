import React from 'react';
import { useTranslation } from 'react-i18next';
import StagesCooperation from '../../components/stages-cooperation';
import scrollPageTop from '../../assets/js/scrollPageTop';

const Services = () => {
  const { i18n } = useTranslation('translations');
  const title = i18n.t('SERVICES_PAGE.TITLE');
  const items = i18n.t('SERVICES_PAGE.SERVICES');
  const cooperationData = i18n.t('STAGES_OF_COOPERATION');

  React.useEffect(() => {
    scrollPageTop();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="title">{title}</div>
        <div className="services">
          { items.map((item) => (
            <div className="services__item" key={item.TITLE}>
              <div className="services__item-image">
                <img src={item.IMAGE} alt={item.TITLE} />
              </div>
              <div className="services__item-title">{item.TITLE}</div>
              <div className="services__item-desc" dangerouslySetInnerHTML={{ __html: item.DESCRIPTION }} />
            </div>
          )) }
        </div>
        <StagesCooperation
          title={cooperationData?.TITLE}
          items={cooperationData?.ITEMS}
          contents={cooperationData?.CONTENTS}
        />
      </div>
    </div>
  );
};

export default Services;
