import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';

import { Loader } from '../Loader';
import { Photo } from '../SaleForm/Photo';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  TextAreaStyled,
  ErrorStyled,
  ButtonStyled,
} from './AdminForm.styled';

import { AdminSchema, LIMIT_CHAR_DESC } from '../../helpers/validationSchema';
// import { NO_SCROLL, PHOTO_URL } from '../../helpers/constants';
import { salesApi } from '../../salesApi';
import { isObjectEmpty } from '../../helpers/isObjectEmpty';

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

export const AdminForm = ({ queryId }) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    // resolver: yupResolver(AdminSchema),
    mode: 'onChange',
  });
  const [descLength, setDescLength] = useState(0);
  const [previewImage, setPreviewImage] = useState([]);
  const [photoError, setPhotoError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const [isPermittedPhoto, setIsPermittedPhoto] = useState(undefined);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isLoading]);

  const checkLength = ({ target }) => {
    const differenceLen = LIMIT_CHAR_DESC - target.value.length;
    setDescLength(prev => differenceLen);
  };

  const removePhotos = () => {
    setValue('photoURL', [], {
      shouldValidate: true,
    });
    // setIsPermittedPhoto(undefined);
  };

  const setPhotos = ({ photoURL }) => {
    const oldPhotoURL = getValues('photoURL');
    const newPhotoURL = [...oldPhotoURL, ...photoURL];

    // setIsPermittedPhoto(prev => {
    //   if (prev === undefined) {
    //     return isPermitted;
    //   }

    //   if (prev) {
    //     return isPermitted;
    //   }

    //   if (!prev) {
    //     return false;
    //   }
    // }
    // );

    setValue('photoURL', newPhotoURL, {
      shouldValidate: true,
    });
  };

  const onSubmit = async data => {
    setIsLoading(true);
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
    if (data.photoURL) {
      setPhotoError(data.photoURL.message);
    }
  };

  return (
    <>
      {isLoading && <Loader />}

      <FormStyled
        onSubmit={handleSubmit(onSubmit, onErrors)}
        autoComplete="off"
      >
        <h3> buy / sale</h3>
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

        <LabelStyled>
          <h2>Контактна інформація</h2>
          <InputStyled
            {...register('contact')}
            placeholder="Telegram/Номер телефону"
            className={'contact'}
          />
          <ErrorStyled>{errors.contact?.message}</ErrorStyled>
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
        />

        <ButtonStyled
          disabled={!isDirty || !isValid || !isObjectEmpty(errors)}
          type="submit"
          aria-label="Send"
        >
          Відправити
        </ButtonStyled>
      </FormStyled>
    </>
  );
};

AdminForm.propTypes = {
  user: PropTypes.string,
  queryId: PropTypes.string,
  onClose: PropTypes.func,
};
