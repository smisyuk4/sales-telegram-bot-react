import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema, LIMIT_CHAR_DESC } from './validationSchema';
import { AiOutlineUser } from 'react-icons/ai';
import { CheckBox } from './CheckBox/CheckBox';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  TextAreaStyled,
  ErrorStyled,
  ButtonStyled,
} from './Form.styled';

const user = '@alex_m9913';

export const Form = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      isAccept: false,
      isOpenRuls: false,
      title: '',
      description: '',
      cost: '',
      contact: '',
      // photo: {},
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const [descLength, setDescLength] = useState(0);

  const checkLength = ({ target }) => {
    const differenceLen = LIMIT_CHAR_DESC - target.value.length;

    setDescLength(prev => differenceLen);
  };

  const setContact = () => {
    setValue('contact', user);
  };

  const setCheckBoxValue = value => {
    console.log('change check box', value);
    setValue('isAccept', value);
  };

  const readRuls = () => {
    console.log('open modal');
    setValue('isOpenRuls', true);
  };

  const onSubmit = data => {
    console.log('data', data);

    reset();
    setDescLength(0);
  };

  const onErrors = data => {
    console.log('data onErrors', data);
  };
  // console.log('isAccept', getValues('isAccept'));

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit, onErrors)}>
      <CheckBox
        register={register}
        errors={errors}
        readRuls={readRuls}
        checked={getValues('isAccept')}
        setCheckBoxValue={setCheckBoxValue}
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

      <LabelStyled>
        <h2>Контактна інформація</h2>

        <InputStyled
          {...register('contact')}
          placeholder="Номер телефону/Telegram"
        />

        <button onClick={setContact} type="button" aria-label="Contact">
          <AiOutlineUser size="2em" />
        </button>

        <ErrorStyled>{errors.contact?.message}</ErrorStyled>
      </LabelStyled>

      {/* <LabelStyled>
        <h2>Фото</h2>
        <InputStyled {...register('photo')} />
        <ErrorStyled>{errors.description?.message}</ErrorStyled>
      </LabelStyled> */}

      <ButtonStyled 
      // disabled={!isValid}
       type="submit" aria-label="Send">
        Відправити
      </ButtonStyled>
    </FormStyled>
  );
};
