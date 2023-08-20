import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { loginUser } from '../../firebase/services';
import { TEXT_MSG } from '../../firebase/errorsAndMessages';
import { Loader } from '../Loader';
import { NO_SCROLL } from '../../helpers/constants';
import { FormLoginStyled } from './LoginForm.styled';
import {
  LabelStyled,
  InputStyled,
  ButtonStyled,
} from '../SaleForm/SaleForm.styled';

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
  email: '',
  password: '',
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    mode: 'onChange',
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add(NO_SCROLL);
    } else {
      document.body.classList.remove(NO_SCROLL);
    }
  }, [isLoading]);

  const onSubmit = async data => {
    setIsLoading(true);

    const result = await loginUser(data);

    if (result === TEXT_MSG.authWrongPassword) {
      setIsLoading(false);
      return Notify.failure(`Вхід не виконано! <br> Не вірний пароль!`);
    }

    if (result === TEXT_MSG.authMissingPassword) {
      setIsLoading(false);
      return Notify.failure(`Пароль обов'язково!`);
    }

    if (result === TEXT_MSG.authInvalidEmail) {
      setIsLoading(false);
      return Notify.failure(`Не вірна електронна пошта!`);
    }

    if (result === TEXT_MSG.authUserNotFound) {
      setIsLoading(false);
      return Notify.failure(
        `Вхід не виконано! <br> Такого адміністратора <br> не існує!`
      );
    }

    if (!result.user) {
      setIsLoading(false);
      return Notify.failure(`Вхід не виконано!`);
    }

    Notify.success(`Вітаємо!`);
    setIsLoading(false);
    navigate('/admin', { replace: true });
  };

  const onErrors = data => {
    console.log('form onErrors', data);
  };

  return (
    <>
      {isLoading && <Loader />}

      <FormLoginStyled
        onSubmit={handleSubmit(onSubmit, onErrors)}
        autoComplete="off"
      >
        <LabelStyled>
          <h2>Електронна пошта</h2>
          <InputStyled
            {...register('email', { required: true })}
            // placeholder="saler@gmail.com"
          />
        </LabelStyled>

        <LabelStyled>
          <h2>Пароль</h2>
          <InputStyled
            {...register('password', { required: true })}
            // placeholder="111111"
          />
        </LabelStyled>

        <ButtonStyled disabled={!isValid} type="submit" aria-label="Send">
          Відправити
        </ButtonStyled>
      </FormLoginStyled>
    </>
  );
};
