import PropTypes from 'prop-types';
import { AiOutlineUser } from 'react-icons/ai';
import {
  LabelStyled,
  InputWrp,
  InputStyled,
  ContactButton,
  ErrorStyled,
} from './Contact.styled';

export const Contact = ({ register, setContact, errors }) => {
  return (
    <div>
      <LabelStyled>
        <h2>Контактна інформація</h2>
        <InputWrp>
          <InputStyled
            {...register('contact')}
            placeholder="Telegram/Номер телефону"
            className={'contact'}
          />
          <ContactButton
            onClick={setContact}
            type="button"
            aria-label="Contact"
          >
            <AiOutlineUser />
          </ContactButton>
        </InputWrp>
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
