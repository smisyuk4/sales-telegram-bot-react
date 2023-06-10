import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox } from './CheckBox';
import { Contact } from './Contact';
import { Modal } from '../Modal';
import { Ruls } from '../Ruls';
import { schema, LIMIT_CHAR_DESC } from './validationSchema';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  TextAreaStyled,
  ErrorStyled,
  ButtonStyled,
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
    formState: { errors, isValid },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const [descLength, setDescLength] = useState(0);
  const [isOpenRuls, setIsOpenRuls] = useState(false);
  const [isChecked, setIsChecked] = useState(getValues('isAccept'));

  const checkLength = ({ target }) => {
    const differenceLen = LIMIT_CHAR_DESC - target.value.length;
    setDescLength(prev => differenceLen);
  };

  const setContact = () => {
    setValue('contact', user, {
      shouldValidate: true,
    });
  };

  const toggleRulsModal = () => {
    setIsOpenRuls(prev => !prev);
  };

  const onSubmit = data => {
    console.log('form data ===>', data);

    reset(DEFAULT_VALUES);
    setDescLength(0);
    setIsChecked(false);
  };

  const onErrors = data => {
    console.log('form onErrors', data);
  };

  return (
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
