import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { myStorage } from '../../firebase/firebase.config';

import { useTelegram } from '../../hooks/telegramHook';
import { Checkbox } from './Checkbox';
import { Contact } from './Contact';
import { Photo } from './Photo';
import { Modal } from '../Modal';
import { Ruls } from '../Ruls';
import { Loader } from '../Loader';

import { schema, LIMIT_CHAR_DESC } from './validationSchema';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  TextAreaStyled,
  ErrorStyled,
  ButtonStyled,
} from './Form.styled';
import { salesApi } from '../../salesApi';

const DEFAULT_VALUES = {
  isAccept: false,
  title: '',
  description: '',
  cost: '',
  contact: '',
  photos: null,
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const [descLength, setDescLength] = useState(0);
  const [isOpenRuls, setIsOpenRuls] = useState(false);
  const [isChecked, setIsChecked] = useState(getValues('isAccept'));
  const [multipleImages, setMultipleImages] = useState([]);
  const { user, onClose, queryId } = useTelegram();
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

  const toggleRulsModal = () => {
    setIsOpenRuls(prev => !prev);
  };

  const onSubmit = async data => {
    setIsLoading(true);
    console.log('form data ===>', data);

    try {
      const checkContent = await salesApi('/web-data', { ...data, queryId });

      if (checkContent) {
        onClose();
        reset();
        setIsChecked(false);
        setIsLoading(false);
        setDescLength(0);
        return;
      }
    } catch (error) {
      console.log(error);
      alert(`error ==> ${error.message}`);
      setIsLoading(false);
    }

    // fetch('https://telegram-bot-d339c.ew.r.appspot.com/web-data', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'aplication/json' },
    //   body: JSON.stringify({ ...data, queryId }),
    // });

    // console.log('form data.photos ===>', data.photos);

    // const uniquePhotoId = Date.now().toString();

    // const imageRef = ref(
    //   myStorage,
    //   `photo/${'june'}/${uniquePhotoId}-${data.photos[0].name}`
    // );

    // await uploadBytes(imageRef, data.photos[0]).then(() => {
    //   console.log(`Фото завантажено в базу`);
    // });

    // const photoURL = await getDownloadURL(imageRef);
    // console.log('photoURL', photoURL);

    // // const formData = new FormData();

    // // formData.append('files', data.photos);
    // // formData.append('other', { ...data });
    // const checkContent = await salesApi('/check', photoURL);
    // console.log('checkContent', checkContent);
    // // const result1 = await salesApi('/form/upload', formData);
    // // console.log('result1', result1);

    // // reset(DEFAULT_VALUES);
    // // setDescLength(0);
    // // setIsChecked(false);
  };

  const onErrors = data => {
    console.log('form onErrors', data);
  };

  return (
    <>
      {isLoading && <Loader />}

      <FormStyled onSubmit={handleSubmit(onSubmit, onErrors)}>
        {isOpenRuls && (
          <Modal toggleRulsModal={toggleRulsModal}>
            <Ruls />
          </Modal>
        )}

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
            placeholder="Куплю/Продам Iphone 12 256 GB"
          />
          <ErrorStyled>{errors.title?.message}</ErrorStyled>
        </LabelStyled>

        <LabelStyled>
          <h2>Опис товару</h2>
          {descLength > 0 && <p>До {descLength} символів</p>}
          <TextAreaStyled
            {...register('description', { onChange: e => checkLength(e) })}
            rows="6"
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
          control={control}
          errors={errors}
          setMultipleImages={setMultipleImages}
          multipleImages={multipleImages}
        />

        <ButtonStyled disabled={!isValid} type="submit" aria-label="Send">
          Відправити
        </ButtonStyled>
      </FormStyled>
    </>
  );
};
