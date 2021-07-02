import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import FieldInput from '../../field-input';
import FieldInputMask from '../../field-input-mask';
import Button from '../../button/button';

const PHONE_MIN_CHARACTERS = 10;

const OrderForm = (props) => {
  const {
    className,
    onSubmit,
    isDisabled,
  } = props;

  const { i18n } = useTranslation('translations');
  const placeholderName = i18n.t('FORMS.PLACEHOLDER_NAME');
  const placeholderPhone = i18n.t('FORMS.PLACEHOLDER_PHONE');
  const placeholderEmail = i18n.t('FORMS.PLACEHOLDER_EMAIL');
  const buttonText = i18n.t('FORMS.BUTTON');
  const nameRequiredText = i18n.t('FORMS.ERRORS.NAME_REQUIRED');
  const nameNumbersText = i18n.t('FORMS.ERRORS.NAME_NUMBERS');
  const phoneRequiredText = i18n.t('FORMS.ERRORS.PHONE_REQUIRED');
  const phoneMinCharactersText = i18n.t('FORMS.ERRORS.PHONE_MIN_CHARACTERS');
  const emailRequiredText = i18n.t('FORMS.ERRORS.EMAIL_REQUIRED');
  const emailInvalidText = i18n.t('FORMS.ERRORS.EMAIL_INVALID');

  const orderFormSchema = React.useMemo(() => yup.object().shape({
    name: yup
      .string()
      .matches(/^([^0-9]*)$/, nameNumbersText)
      .required(nameRequiredText),
    phone: yup
      .string()
      .required(phoneRequiredText)
      .min(PHONE_MIN_CHARACTERS, `${phoneMinCharactersText} ${PHONE_MIN_CHARACTERS}`),
    email: yup
      .string()
      .required(emailRequiredText)
      .email(emailInvalidText),
  }), [
    nameNumbersText,
    nameRequiredText,
    phoneRequiredText,
    phoneMinCharactersText,
    emailRequiredText,
    emailInvalidText,
  ]);

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(orderFormSchema),
  });

  return (
    <form
      className={cn('order-form', className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <FieldInput
            className="call-back-form__field"
            id="name"
            placeholder={placeholderName}
            ref={register('name', { required: true })}
            error={errors.name?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <FieldInputMask
            className="call-back-form__field"
            id="phone"
            type="tel"
            placeholder={placeholderPhone}
            format="+7 (###) ###-####"
            mask="_"
            error={errors.phone?.message}
            ref={register('phone', { required: true })}
            {...field}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <FieldInput
            className="call-back-form__field"
            id="email"
            type="email"
            placeholder={placeholderEmail}
            error={errors.email?.message}
            ref={register('email', { required: true })}
            {...field}
          />
        )}
      />
      <Button
        type="submit"
        className="call-back-form__button button--red"
        isDisabled={isDisabled}
      >
        {buttonText}
      </Button>
    </form>
  );
};

OrderForm.defaultProps = {
  className: '',
  onSubmit: null,
  isDisabled: false,
};

OrderForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default OrderForm;
