import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import FieldInput from '../../field-input';
import Button from '../../button/button';
import FieldInputMask from '../../field-input-mask';

const PHONE_MIN_CHARACTERS = 10;

const CallBackForm = (props) => {
  const {
    className,
    onSubmit,
    isDisabled,
  } = props;

  const { i18n } = useTranslation('translations');
  const placeholderName = i18n.t('FORMS.PLACEHOLDER_NAME');
  const placeholderPhone = i18n.t('FORMS.PLACEHOLDER_PHONE');
  const buttonText = i18n.t('FORMS.BUTTON');
  const nameRequiredText = i18n.t('FORMS.ERRORS.NAME_REQUIRED');
  const nameNumbersText = i18n.t('FORMS.ERRORS.NAME_NUMBERS');
  const phoneRequiredText = i18n.t('FORMS.ERRORS.PHONE_REQUIRED');
  const phoneMinCharactersText = i18n.t('FORMS.ERRORS.PHONE_MIN_CHARACTERS');

  const CallBackFormSchema = React.useMemo(() => yup.object().shape({
    name: yup
      .string()
      .matches(/^([^0-9]*)$/, nameNumbersText)
      .required(nameRequiredText),
    phone: yup
      .string()
      .required(phoneRequiredText)
      .min(PHONE_MIN_CHARACTERS, `${phoneMinCharactersText} ${PHONE_MIN_CHARACTERS}`),
  }), [
    nameNumbersText,
    nameRequiredText,
    phoneRequiredText,
    phoneMinCharactersText,
  ]);

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(CallBackFormSchema),
  });

  return (
    <form
      className={cn('call-back-form', className)}
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

CallBackForm.defaultProps = {
  className: '',
  onSubmit: null,
  isDisabled: false,
};

CallBackForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default CallBackForm;
