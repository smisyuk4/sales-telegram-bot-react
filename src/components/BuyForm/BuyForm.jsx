import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';

import { Checkbox } from '../SaleForm/Checkbox';
import { Contact } from '../SaleForm/Contact';
import { Modal } from '../Modal';
import { Ruls } from '../Ruls';
import { Loader } from '../Loader';
import { BuySchema, LIMIT_CHAR_DESC } from '../../helpers/validationSchema';
import { isObjectEmpty } from '../../helpers/isObjectEmpty';
import { NO_SCROLL } from '../../helpers/constants';

import {
  FormStyled,
  LabelStyled,
  InputStyled,
  TextAreaStyled,
  ErrorStyled,
  ButtonStyled,
} from './BuyForm.styled';

const DEFAULT_VALUES = {
  isAccept: false,
  title: '',
  description: '',
  contact: '',
};

export const BuyForm = ({
  user,
  isLoading,
  isShowPaymentPage,
  getPaymentForm,
}) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(BuySchema),
    mode: 'onChange',
  });
  const [descLength, setDescLength] = useState(0);
  const [isOpenRuls, setIsOpenRuls] = useState(false);
  const [isChecked, setIsChecked] = useState(getValues('isAccept'));

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add(NO_SCROLL);
    } else {
      document.body.classList.remove(NO_SCROLL);
    }
  }, [isLoading]);

  const checkLength = ({ target }) => {
    const differenceLen = LIMIT_CHAR_DESC - target.value.length;
    setDescLength(prev => differenceLen);
  };

  const setContact = () => {
    setValue('contact', `@${user}`, {
      shouldValidate: true,
    });
  };

  const toggleRulsModal = () => {
    document.body.classList.remove(NO_SCROLL);
    setIsOpenRuls(prev => !prev);
  };

  const onSubmit = async data => {
    isShowPaymentPage(true);
    getPaymentForm(data);
  };

  const onErrors = data => {
    console.log('form onErrors', data);
  };

  return (
    <>
      {isLoading && <Loader />}
      {isOpenRuls && (
        <Modal toggleRulsModal={toggleRulsModal}>
          <Ruls />
        </Modal>
      )}

      <FormStyled
        onSubmit={handleSubmit(onSubmit, onErrors)}
        autoComplete="off"
      >
        <Checkbox
          register={register}
          setIsChecked={setIsChecked}
          isChecked={isChecked}
          toggleRulsModal={toggleRulsModal}
          errors={errors}
        />

        <LabelStyled>
          <h2>Заголовок</h2>
          <InputStyled
            {...register('title')}
            placeholder="Куплю Iphone 12 256 GB"
          />
          <ErrorStyled>{errors.title?.message}</ErrorStyled>
        </LabelStyled>

        <LabelStyled>
          <h2>Опис товару</h2>
          {descLength > 0 && <p>до {descLength} символів</p>}
          <TextAreaStyled
            {...register('description', { onChange: e => checkLength(e) })}
            rows="2"
            cols="50"
            placeholder="Колір чорний, памʼять 256 GB..."
          />
          <ErrorStyled>{errors.description?.message}</ErrorStyled>
        </LabelStyled>

        <Contact register={register} setContact={setContact} errors={errors} />

        <ButtonStyled
          disabled={!isDirty || !isValid || !isObjectEmpty(errors)}
          type="submit"
          aria-label="Send"
        >
          Перейти до оплати
        </ButtonStyled>
      </FormStyled>
    </>
  );
};

BuyForm.propTypes = {
  user: PropTypes.string,
  isLoading: PropTypes.bool,
  isShowPaymentPage: PropTypes.func,
  getPaymentForm: PropTypes.func,
};
