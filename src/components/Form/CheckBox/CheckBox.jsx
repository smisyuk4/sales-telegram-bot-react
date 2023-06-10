import { useState, useEffect } from 'react';
import {
  DivStyled,
  CheckBoxStyled,
  RulsLink,
  ErrorStyled,
} from './CheckBox.styled';

export const CheckBox = ({
  register,
  errors,
  readRuls,
  checked,
  setCheckBoxValue,
}) => {
  // const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setCheckBoxValue(isChecked);
  }, [isChecked]);

  return (
    <DivStyled>
      <h2>Правила</h2>

      <div>
        <CheckBoxStyled
          {...register('isAccept')}
          checked={isChecked}
          onChange={() => setIsChecked(prev => !prev)}
          className={isChecked ? 'checked' : ''}
          type="checkbox"
        />
        <RulsLink onClick={readRuls}>Прочитав/ла та погоджуюсь</RulsLink>
      </div>
      <ErrorStyled>{errors.isAccept?.message}</ErrorStyled>
    </DivStyled>
  );
};
