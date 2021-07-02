import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Router from './Router.jsx';
import Header from './components/header';
import Footer from './components/footer';
import Popup from './components/popup';
import {
  isModalShownSelector,
  modalFormNameSelector,
} from './redux-store/modal/selectors';
import FORMS_NAMES from './constants/forms-names';
import CallBackForm from './components/forms/call-back-form';
import OrderForm from './components/forms/order-form';
import ThanksBlock from './components/thanks-block';
import { setModalName, setModalToggle } from './redux-store/modal/actions';
import sendData from './assets/js/send-data';

const App = () => {
  const location = useLocation();
  const { i18n } = useTranslation('translations');
  const callBackFormTitle = i18n.t('FORMS.CALL_BACK_TITLE');
  const orderFormTitle = i18n.t('FORMS.ORDER_TITLE');
  const thanksTitle = i18n.t('FORMS.THANKS_TITLE');
  const thanksText = i18n.t('FORMS.THANKS_TEXT');
  const isModalShown = useSelector(isModalShownSelector());
  const modalFormName = useSelector(modalFormNameSelector());
  const dispatch = useDispatch();

  const [fetching, setFetching] = React.useState(false);

  const handleCallBackFormSubmit = async (formData) => {
    setFetching(true);
    const { data, status } = await sendData(formData);
    setFetching(false);
    dispatch(setModalName(FORMS_NAMES?.THANKS_BLOCK));
    console.log(data, status);
  };
  const handleOrderFormSubmit = async (formData) => {
    setFetching(true);
    const { data, status } = await sendData(formData);
    setFetching(false);
    dispatch(setModalName(FORMS_NAMES?.THANKS_BLOCK));
    console.log(data, status);
  };
  const handleThanksBlockClose = () => {
    const body = document.querySelector('body');
    dispatch(setModalToggle(false));
    dispatch(setModalName(null));
    body.classList.remove('is-scroll-blocked');
  };

  const forms = {
    [`${FORMS_NAMES?.CALL_BACK}`]: (
      <CallBackForm
        onSubmit={handleCallBackFormSubmit}
        isDisabled={fetching}
      />
    ),
    [`${FORMS_NAMES?.ORDER_PROJECT}`]: (
      <OrderForm
        onSubmit={handleOrderFormSubmit}
        isDisabled={fetching}
      />
    ),
    [`${FORMS_NAMES?.THANKS_BLOCK}`]: (
      <ThanksBlock onClick={handleThanksBlockClose}>
        {thanksText}
      </ThanksBlock>
    ),
  };

  const formTitles = {
    [`${FORMS_NAMES?.CALL_BACK}`]: callBackFormTitle,
    [`${FORMS_NAMES?.ORDER_PROJECT}`]: orderFormTitle,
    [`${FORMS_NAMES?.THANKS_BLOCK}`]: thanksTitle,
  };

  return (
    <>
      <Header innerPage={location.pathname !== '/'} />
      <Switch location={location}>
        { Router.map(({ path, name, component }) => (
          <Route
            path={path}
            exact
            render={(props) => component(props)}
            key={name}
          />
        )) }
      </Switch>
      <Footer />
      {isModalShown && (
        <Popup
          isShow={isModalShown}
          title={formTitles[modalFormName]}
        >
          {forms[modalFormName]}
        </Popup>
      )}
    </>
  );
};

export default App;
