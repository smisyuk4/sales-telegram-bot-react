import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';

import { useTelegram } from '../../hooks/telegramHook';
import { Checkbox } from './Checkbox';
import { Contact } from './Contact';
import { Photo } from './Photo';
import { Modal } from '../Modal';
import { Ruls } from '../Ruls';
import { Loader } from '../Loader';

Notify.init({
  borderRadius: '8px',
  useIcon: false,
  plainText: false,
  fontSize: '18px',
  success: {
    textColor: '#ffd700',
    background: '#0057b8',
  },
  failure: {
    background: '#ff5549',
  },
});

import { SaleSchema, LIMIT_CHAR_DESC } from './validationSchema';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  TextAreaStyled,
  ErrorStyled,
  ButtonStyled,
  // PayButton,
} from './SaleForm.styled';
import { salesApi } from '../../salesApi';

const DEFAULT_VALUES = {
  isAccept: false,
  title: '',
  description: '',
  cost: '',
  contact: '',
  photos: null,
  photoURL: [],
};

const AXIOS_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const SaleForm = ({ user, queryId, onClose }) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(SaleSchema),
    mode: 'onChange',
  });
  const [descLength, setDescLength] = useState(0);
  const [isOpenRuls, setIsOpenRuls] = useState(false);
  const [isChecked, setIsChecked] = useState(getValues('isAccept'));
  const [previewImage, setPreviewImage] = useState([]);
  const [photoError, setPhotoError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const checkLength = ({ target }) => {
    const differenceLen = LIMIT_CHAR_DESC - target.value.length;
    setDescLength(prev => differenceLen);
  };

  const setContact = () => {
    setValue('contact', `@${user}`, {
      shouldValidate: true,
    });
  };

  const setPhotos = value => {
    setValue('photoURL', value, {
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
        '/web-data-sale',
        dataPackage,
        AXIOS_CONFIG
      );

      if (checkContent) {
        Notify.success(`Ваше оголошення відправлено!`);
        onClose();
        reset();
        setIsChecked(false);
        setIsLoading(false);
        setDescLength(0);
        setPreviewImage([]);
        return;
      }
    } catch (error) {
      Notify.failure(`Помилка відправки оголошення! <br> ${error.message}`);
      setIsLoading(false);
    }
  };

  const onErrors = data => {
    console.log('form onErrors', data);
    setPhotoError(data.photoURL.message);
  };

  // const openPayService = () => {
  //   alert('Розробка ще триває');
  // };

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
            placeholder="Продам Iphone 12 256 GB"
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

        <LabelStyled>
          <h2>Вартість, грн</h2>
          <InputStyled {...register('cost')} placeholder="14000" />
          <ErrorStyled>{errors.cost?.message}</ErrorStyled>
        </LabelStyled>

        <Contact register={register} setContact={setContact} errors={errors} />

        <Photo
          register={register}
          photoError={photoError}
          setPhotoError={setPhotoError}
          setPhotos={setPhotos}
          setPreviewImage={setPreviewImage}
          previewImage={previewImage}
          setIsLoading={setIsLoading}
        />

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

SaleForm.propTypes = {
  user: PropTypes.string,
  queryId: PropTypes.string,
  onClose: PropTypes.func,
};
