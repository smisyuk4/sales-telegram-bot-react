import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validationSchema';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  TextAreaStyled,
  ErrorStyled,
  ButtonStyled,
} from './Form.styled';

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      cost: '',
      contact: '',
      // photo: {},
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const onSubmit = data => {
    console.log(data);

    reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <LabelStyled>
        <h2>Заголовок</h2>
        <InputStyled {...register('title')} placeholder="Телефон apple 7+" />
        <ErrorStyled>{errors.title?.message}</ErrorStyled>
      </LabelStyled>

      <LabelStyled>
        <h2>Опис товару</h2>
        <p>До {88} символів</p>
        <TextAreaStyled
          {...register('description')}
          rows="6"
          cols="50"
          placeholder="2020 року випуску, 256 GB, рожевий"
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
        <InputStyled {...register('contact')} placeholder="050-34-34-000" />
        <ErrorStyled>{errors.contact?.message}</ErrorStyled>
      </LabelStyled>

      {/* <LabelStyled>
        <h2>Фото</h2>
        <InputStyled {...register('photo')} />
        <ErrorStyled>{errors.description?.message}</ErrorStyled>
      </LabelStyled> */}

      <ButtonStyled disabled={!isValid} type="submit" aria-label="Send">
        Відправити
      </ButtonStyled>
    </FormStyled>
  );
};
