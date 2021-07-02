import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import MainScreen from '../../components/main-screen';
import StagesCooperation from '../../components/stages-cooperation';
import AboutCompany from '../../components/about-company';
import GratefulClients from '../../components/grateful-clients';
import Contacts from '../../components/contacts';
import scrollPageTop from '../../assets/js/scrollPageTop';
import { setModalName, setModalToggle } from '../../redux-store/modal/actions';
import FORMS_NAMES from '../../constants/forms-names';
import { isModalShownSelector } from '../../redux-store/modal/selectors';

const Main = () => {
  const { i18n } = useTranslation('translations');
  const sliderItems = i18n.t('MAIN_SLIDER');
  const cooperationData = i18n.t('STAGES_OF_COOPERATION');
  const aboutCompanyData = i18n.t('ABOUT_COMPANY');
  const gratefulClientsData = i18n.t('GRATEFUL_CLIENTS');
  const email = i18n.t('EMAIL');
  const phone = i18n.t('PHONE');
  const address = i18n.t('ADDRESS');
  const mapData = i18n.t('MAP');
  const callBackData = i18n.t('CALLBACK');
  const dispatch = useDispatch();
  const isModalShown = useSelector(isModalShownSelector());

  const handleCallBackButtonClick = () => {
    dispatch(setModalToggle(!isModalShown));
    dispatch(setModalName(FORMS_NAMES.CALL_BACK));
  };

  const handleOrderButtonClick = () => {
    dispatch(setModalToggle(!isModalShown));
    dispatch(setModalName(FORMS_NAMES.ORDER_PROJECT));
  };

  React.useEffect(() => {
    scrollPageTop();
  }, []);

  return (
    <>
      <MainScreen
        sliderItems={sliderItems}
        onClick={handleOrderButtonClick}
      />
      <StagesCooperation
        title={cooperationData?.TITLE}
        items={cooperationData?.ITEMS}
        contents={cooperationData?.CONTENTS}
      />
      <AboutCompany
        title={aboutCompanyData?.TITLE}
        items={aboutCompanyData?.ITEMS}
      />
      <GratefulClients
        title={gratefulClientsData?.TITLE}
        items={gratefulClientsData?.ITEMS}
      />
      <Contacts
        email={email}
        phone={phone}
        address={address}
        map={mapData}
        callBack={callBackData}
        onClick={handleCallBackButtonClick}
      />
    </>
  );
};

export default Main;
