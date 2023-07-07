import PropTypes from 'prop-types';
import { DivStyled } from './Alert.styled';

export const Alert = ({ text }) => {
  return <DivStyled>{text}</DivStyled>;
};

Alert.propTypes = {
  text: PropTypes.string,
};
