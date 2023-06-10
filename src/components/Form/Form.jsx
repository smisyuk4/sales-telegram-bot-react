import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema, LIMIT_CHAR_DESC } from './validationSchema';
import { AiOutlineUser } from 'react-icons/ai';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  TextAreaStyled,
  ErrorStyled,
  ButtonStyled,
  DivStyled,
  CheckBoxStyled,
  RulsLink,
} from './Form.styled';

const user = '@alex_m9913';

const DEFAULT_VALUES = {
  isAccept: false,
  title: '',
  description: '',
  cost: '',
  contact: '',
  // photo: {},
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const [descLength, setDescLength] = useState(0);
  const [isOpenRuls, setIsOpenRuls] = useState(false);
  const [isChecked, setIsChecked] = useState(getValues('isAccept'));

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(DEFAULT_VALUES);
    }
  }, [formState, reset]);

  const checkLength = ({ target }) => {
    const differenceLen = LIMIT_CHAR_DESC - target.value.length;

    setDescLength(prev => differenceLen);
  };

  const setContact = () => {
    setValue('contact', user);
  };

  const openRulsModal = () => {
    console.log('open modal', isOpenRuls);
    setIsOpenRuls(prev => !prev);
  };

  const onSubmit = data => {
    console.log('form data ===>', data);

    // reset(DEFAULT_VALUES);
    setDescLength(0);
  };

  const onErrors = data => {
    console.log('data onErrors', data);
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit, onErrors)}>
      <DivStyled>
        <h2>Правила</h2>

        <div>
          <CheckBoxStyled
            {...register('isAccept', {
              // onChange: () => setIsChecked(prev => !prev),
            })}
            // checked={isChecked}
            // onChange={() => setIsChecked(prev => !prev)}
            className={isChecked ? 'checked' : ''}
            type="checkbox"
          />
          <RulsLink onClick={openRulsModal}>Прочитав/ла та погоджуюсь</RulsLink>
        </div>
        <ErrorStyled>{errors.isAccept?.message}</ErrorStyled>
      </DivStyled>

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

      <ButtonStyled disabled={!isValid} type="submit" aria-label="Send">
        Відправити
      </ButtonStyled>
    </FormStyled>
  );
};
