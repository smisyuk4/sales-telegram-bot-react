import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

// import { useTelegram } from '../../hooks/telegramHook';
import { Checkbox } from '../SaleForm/Checkbox';
import { Contact } from '../SaleForm/Contact';
import { Modal } from '../Modal';
import { Ruls } from '../Ruls';
import { Loader } from '../Loader';
import { Alert } from '../Alert';
import { BuySchema, LIMIT_CHAR_DESC } from '../SaleForm/validationSchema';
import { salesApi } from '../../salesApi';

import {
  FormStyled,
  LabelStyled,
  InputStyled,
  TextAreaStyled,
  ErrorStyled,
  ButtonStyled,
  // PayButton,
} from '../SaleForm/SaleForm.styled';

const DEFAULT_VALUES = {
  isAccept: false,
  title: '',
  description: '',
  contact: '',
};

const AXIOS_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const BuyForm = ({ user, queryId, onClose }) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(BuySchema),
    mode: 'onChange',
  });
  const [descLength, setDescLength] = useState(0);
  const [isOpenRuls, setIsOpenRuls] = useState(false);
  const [isChecked, setIsChecked] = useState(getValues('isAccept'));
  // const { user, onClose, queryId } = useTelegram();
  const [isLoading, setIsLoading] = useState(false);
  const [isShowAlert, setIsShowAlert] = useState(false);

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
    setIsOpenRuls(prev => !prev);
  };

  const onSubmit = async data => {
    setIsLoading(true);
    const dataPackage = JSON.stringify({ ...data, user, queryId });

    try {
      const checkContent = await salesApi(
        '/web-data-buy',
        dataPackage,
        AXIOS_CONFIG
      );

      if (checkContent) {
        setIsShowAlert(true);
        onClose();
        reset();
        setIsChecked(false);
        setIsLoading(false);
        setDescLength(0);

        const timerId = setTimeout(() => {
          setIsShowAlert(false);
          clearTimeout(timerId);
        }, 1500);

        return;
      }
    } catch (error) {
      alert(`error ==> ${error.message}`);
      setIsLoading(false);
    }
  };

  const onErrors = data => {
    console.log('form onErrors', data);
  };

  // const openPayService = () => {
  //   alert('Розробка ще триває');
  // };

  return (
    <>
      {isLoading && <Loader />}
      {isShowAlert && <Alert text={'Ваше оголошення відправлено'} />}
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

        {/* <PayButton onClick={openPayService} type="button" aria-label="Send">
          Оплата послуги
        </PayButton> */}

        <ButtonStyled
          disabled={!isValid && !errors}
          type="submit"
          aria-label="Send"
        >
          Відправити
        </ButtonStyled>
      </FormStyled>
    </>
  );
};

BuyForm.propTypes = {
  user: PropTypes.string,
  queryId: PropTypes.string,
  onClose: PropTypes.func,
};
