import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import PropTypes from 'prop-types';

import { isObjectEmpty } from '../../helpers/isObjectEmpty';
import { Checkbox } from './Checkbox';
import { Contact } from './Contact';
import { Photo } from './Photo';
import { Modal } from '../Modal';
import { Ruls } from '../Ruls';
import { Loader } from '../Loader';

import { SaleSchema, LIMIT_CHAR_DESC } from '../../helpers/validationSchema';
import { NO_SCROLL, PHOTO_URL } from '../../helpers/constants';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  TextAreaStyled,
  ErrorStyled,
  ButtonStyled,
} from './SaleForm.styled';

const DEFAULT_VALUES = {
  isAccept: false,
  title: '',
  description: '',
  cost: '',
  contact: '',
  photos: null,
  photoURL: [],
};

export const SaleForm = ({
  user,
  isLoading,
  setIsLoading,
  isShowPaymentPage,
  getPaymentForm,
}) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isDirty, isValid },
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
  // const [isLoading, setIsLoading] = useState(false);
  const [isPermittedPhoto, setIsPermittedPhoto] = useState(undefined);

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

  const removePhotos = () => {
    setValue(PHOTO_URL, [], {
      shouldValidate: true,
    });
    setIsPermittedPhoto(undefined);
  };

  const setPhotos = ({ isPermitted, photoURL }) => {
    const oldPhotoURL = getValues(PHOTO_URL);
    const newPhotoURL = [...oldPhotoURL, ...photoURL];

    setIsPermittedPhoto(prev => {
      if (prev === undefined) {
        return isPermitted;
      }

      if (prev) {
        return isPermitted;
      }

      if (!prev) {
        return false;
      }
    });

    setValue(PHOTO_URL, newPhotoURL, {
      shouldValidate: true,
    });
  };

  const toggleRulsModal = () => {
    document.body.classList.remove(NO_SCROLL);
    setIsOpenRuls(prev => !prev);
  };

  const onSubmit = async data => {
    delete data.photos;
    isShowPaymentPage(true);
    getPaymentForm(data);

    // setIsLoading(true);
    // const dataPackage = JSON.stringify({ ...data, user, queryId });

    // try {
    //   const checkContent = await salesApi(
    //     '/web-data-sale',
    //     dataPackage,
    //     AXIOS_CONFIG
    //   );

    //   if (checkContent) {
    //     Notify.success(`Ваше оголошення відправлено!`);
    //     onClose();
    //     reset();
    //     setIsChecked(false);
    //     setIsLoading(false);
    //     setDescLength(0);
    //     setPreviewImage([]);
    //     return;
    //   }
    // } catch (error) {
    //   Notify.failure(`Помилка відправки оголошення! <br> ${error.message}`);
    //   setIsLoading(false);
    // }
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
          removePhotos={removePhotos}
        />

        <ButtonStyled
          disabled={
            !isDirty || !isValid || !isPermittedPhoto || !isObjectEmpty(errors)
          }
          type="submit"
          aria-label="Send"
        >
          Перейти до оплати
        </ButtonStyled>
      </FormStyled>
    </>
  );
};

SaleForm.propTypes = {
  user: PropTypes.string,
  isLoading: PropTypes.bool,
  setIsLoading: PropTypes.func,
  isShowPaymentPage: PropTypes.func,
  getPaymentForm: PropTypes.func,
};
