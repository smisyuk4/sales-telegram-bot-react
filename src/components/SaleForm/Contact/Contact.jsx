import PropTypes from 'prop-types';
import { AiOutlineUser } from 'react-icons/ai';
import { LabelStyled, InputStyled, ErrorStyled } from './Contact.styled';

export const Contact = ({ register, setContact, errors }) => {
  return (
    <div>
      <LabelStyled>
        <h2>Контактна інформація</h2>

        <InputStyled
          {...register('contact')}
          placeholder="Telegram/Номер телефону"
          className={'contact'}
        />

        <button onClick={setContact} type="button" aria-label="Contact">
          <AiOutlineUser size="2em" />
        </button>
      </LabelStyled>
      <ErrorStyled>{errors.contact?.message}</ErrorStyled>
    </div>
  );
};

Contact.propTypes = {
  register: PropTypes.func.isRequired,
  setContact: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
