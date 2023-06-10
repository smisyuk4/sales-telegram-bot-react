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
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      cost: '',
      contact: '',
      // photo: {},
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = data => console.log(data);

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <LabelStyled>
        <p>Заголовок</p>
        <InputStyled {...register('title')} />
        <ErrorStyled>{errors.title?.message}</ErrorStyled>
      </LabelStyled>

      <LabelStyled>
        <p>Опис товару</p>
        <TextAreaStyled {...register('description')} rows="6" cols="50" />
        <ErrorStyled>{errors.description?.message}</ErrorStyled>
      </LabelStyled>

      <LabelStyled>
        <p>Вартість</p>
        <InputStyled {...register('cost', { required: true })} />
        <ErrorStyled>{errors.cost?.message}</ErrorStyled>
      </LabelStyled>

      <LabelStyled>
        <p>Контактна інформація</p>
        <InputStyled {...register('contact', { required: true })} />
        <ErrorStyled>{errors.contact?.message}</ErrorStyled>
      </LabelStyled>

      {/* <LabelStyled>
        <p>Фото</p>
        <InputStyled {...register('photo', { required: true })} />
        <ErrorStyled>{errors.description?.message}</ErrorStyled>
      </LabelStyled> */}

      <ButtonStyled type="submit">Відправити</ButtonStyled>
    </FormStyled>
  );
};
