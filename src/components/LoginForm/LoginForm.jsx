import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { loginUser } from '../../firebase/services';
import { TEXT_MSG } from '../../firebase/errorsAndMessages';
import { FormLoginStyled } from './LoginForm.styled';
import {
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
    const result = await loginUser(data);

    if (result === TEXT_MSG.authWrongPassword) {
      return Notify.failure(`Вхід не виконано! <br> Не вірний пароль!`);
    }

    if (result === TEXT_MSG.authUserNotFound) {
      return Notify.failure(
        `Вхід не виконано! <br> Такого користувача не існує!`
      );
    }

    Notify.success(`Вітаємо!`);
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
