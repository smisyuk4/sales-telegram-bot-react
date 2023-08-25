import PropTypes from 'prop-types';
import {
  DivStyled,
  CheckBoxStyled,
  RulsLink,
  ErrorStyled,
} from './Checkbox.styled';

export const Checkbox = ({
  register,
  setIsChecked,
  isChecked,
  toggleModal,
  errors,
}) => {
  return (
    <DivStyled>
      <h2>Правила</h2>

      <div>
        <CheckBoxStyled
          {...register('isAccept', {
            onChange: () => setIsChecked(prev => !prev),
          })}
          className={isChecked ? 'checked' : ''}
          type="checkbox"
        />
        <RulsLink onClick={toggleModal}>Прочитав/ла та погоджуюсь</RulsLink>
      </div>
      <ErrorStyled>{errors.isAccept?.message}</ErrorStyled>
    </DivStyled>
  );
};

Checkbox.propTypes = {
  register: PropTypes.func.isRequired,
  setIsChecked: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
