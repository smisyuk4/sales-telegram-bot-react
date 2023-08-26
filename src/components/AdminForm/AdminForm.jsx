import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';

import { Loader } from '../Loader';
import { Photo } from '../SaleForm/Photo';
import {
  FormStyled,
  LabelStyled,
  TypeStyled,
  PaymentStyled,
  InputStyled,
  TextAreaStyled,
  ErrorStyled,
  ButtonStyled,
  RadioStyled,
} from './AdminForm.styled';

// import { NO_SCROLL, PHOTO_URL } from '../../helpers/constants';
import { salesApi } from '../../salesApi';
import { removeEmptyValues } from '../../helpers/objectMethods';

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

const DEFAULT_VALUES = {
  isAccept: true,
  title: null,
  description: null,
  cost: null,
  contact: null,
  photos: null,
  photoURL: [],
  user: null,
  payment: false,
  type: 'sale',
};

const AXIOS_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const AdminForm = ({ queryId }) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    mode: 'onChange',
  });
  const [previewImage, setPreviewImage] = useState([]);
  const [photoError, setPhotoError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [typeAdvertisement, setTypeAdvertisement] = useState('');

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isLoading]);

  const removePhotos = () => {
    setValue('photoURL', [], {
      shouldValidate: true,
    });
  };

  const setPhotos = ({ photoURL }) => {
    const oldPhotoURL = getValues('photoURL');
    const newPhotoURL = [...oldPhotoURL, ...photoURL];

    setValue('photoURL', newPhotoURL, {
      shouldValidate: true,
    });
  };

  const onSubmit = async obj => {
    setIsLoading(true);
    const data = removeEmptyValues(obj);

    const dataPackage = JSON.stringify({ ...data, queryId });

    try {
      const checkContent = await salesApi(
        '/web-data-admin',
        dataPackage,
        AXIOS_CONFIG
      );

      if (checkContent) {
        Notify.success(`Ваше оголошення відправлено!`);
        reset();
        setIsLoading(false);
        setPreviewImage([]);
        return;
      }
    } catch (error) {
      if (error.response) {
        Notify.failure(
          `Помилка відправки оголошення! <br> ${error.response.data.message}`
        );
      } else {
        Notify.failure(`Помилка відправки оголошення! <br> ${error.message}`);
      }
      setIsLoading(false);
    }
  };

  const onErrors = data => {
    console.log('form onErrors', data);
    if (data.photoURL) {
      setPhotoError(data.photoURL.message);
    }
  };

  const handlerChangeType = ({ target }) => {
    console.log(target.value);
    alert(target.value);
    setTypeAdvertisement(prev => target.value);
  };

  return (
    <>
      {isLoading && <Loader />}

      <FormStyled
        onSubmit={handleSubmit(onSubmit, onErrors)}
        autoComplete="off"
      >
        <LabelStyled>
          <h2>Заголовок</h2>
          <InputStyled
            {...register('title', { required: true })}
            placeholder="Продам Iphone 12 256 GB"
          />
          {errors.title && <ErrorStyled>Обов`язкове поле</ErrorStyled>}
        </LabelStyled>

        <LabelStyled>
          <h2>Клієнт</h2>
          <InputStyled
            {...register('user', { required: true })}
            placeholder="alex_mnko"
          />
          {errors.user && <ErrorStyled>Обов`язкове поле</ErrorStyled>}
        </LabelStyled>

        <TypeStyled>
          <h2>Тип оголошення</h2>
          <RadioStyled>
            <label htmlFor="sale">
              <input
                {...register('type', { required: true })}
                type="radio"
                value="sale"
                id="sale"
                defaultChecked
                onChange={e => handlerChangeType(e)}
              />
              <h5>Продати</h5>
            </label>

            <label htmlFor="buy">
              <input
                {...register('type', { required: true })}
                type="radio"
                value="buy"
                id="buy"
                onChange={e => handlerChangeType(e)}
              />
              <h5>Придбати</h5>
            </label>
          </RadioStyled>
        </TypeStyled>

        <PaymentStyled>
          <h2>Наявність оплати</h2>
          <RadioStyled>
            <label htmlFor="paidFor">
              <input
                {...register('payment', { required: true })}
                type="radio"
                value="true"
                id="paidFor"
              />
              <h5>Оплачено</h5>
            </label>

            <label htmlFor="notPaid">
              <input
                {...register('payment', { required: true })}
                type="radio"
                value="false"
                id="notPaid"
                defaultChecked
              />
              <h5>Не оплачено</h5>
            </label>
          </RadioStyled>
        </PaymentStyled>

        <LabelStyled>
          <h2>Опис товару</h2>
          <TextAreaStyled
            {...register('description', { required: true })}
            rows="2"
            cols="50"
            placeholder="Колір чорний, памʼять 256 GB..."
          />
          {errors.description && <ErrorStyled>Обов`язкове поле</ErrorStyled>}
        </LabelStyled>

        <LabelStyled>
          <h2>Вартість, грн</h2>
          <InputStyled {...register('cost')} placeholder="14000" />
        </LabelStyled>

        <LabelStyled>
          <h2>Контактна інформація</h2>
          <InputStyled
            {...register('contact', { required: true })}
            placeholder="Telegram/Номер телефону"
            className={'contact'}
          />
          {errors.contact && <ErrorStyled>Обов`язкове поле</ErrorStyled>}
        </LabelStyled>

        <Photo
          register={register}
          photoError={photoError}
          setPhotoError={setPhotoError}
          setPhotos={setPhotos}
          setPreviewImage={setPreviewImage}
          previewImage={previewImage}
          setIsLoading={setIsLoading}
          removePhotos={removePhotos}
          owner="admin"
          type={typeAdvertisement}
        />

        <ButtonStyled type="submit" aria-label="Send">
          Відправити
        </ButtonStyled>
      </FormStyled>
    </>
  );
};

AdminForm.propTypes = {
  queryId: PropTypes.string,
};
