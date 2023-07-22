import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { loginUser } from '../../firebase/services';
import { FormLoginStyled } from './LoginForm.styled';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  ErrorStyled,
  ButtonStyled,
} from '../SaleForm/SaleForm.styled';

const DEFAULT_VALUES = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    // resolver: yupResolver(SaleSchema),
    mode: 'onChange',
  });
  const navigate = useNavigate();

  const onSubmit = async data => {
    console.log(data);
    const result = await loginUser(data);
    console.log('loginUser => ', result);
    navigate('/admin-panel');
  };

  const onErrors = data => {
    console.log('form onErrors', data);
  };

  return (
    <FormLoginStyled
      onSubmit={handleSubmit(onSubmit, onErrors)}
      autoComplete="off"
    >
      <LabelStyled>
        <h2>Електронна пошта</h2>
        <InputStyled {...register('email')} placeholder="saler@gmail.com" />
        <ErrorStyled>{errors.title?.message}</ErrorStyled>
      </LabelStyled>

      <LabelStyled>
        <h2>Пароль</h2>
        <InputStyled {...register('password')} placeholder="111111" />
        <ErrorStyled>{errors.title?.message}</ErrorStyled>
      </LabelStyled>

      <ButtonStyled
        disabled={!isValid && !errors}
        type="submit"
        aria-label="Send"
      >
        Відправити
      </ButtonStyled>
    </FormLoginStyled>
  );
};
