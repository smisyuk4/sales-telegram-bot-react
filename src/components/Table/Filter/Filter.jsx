import PropTypes from 'prop-types';
import { FormStyled } from './Filter.styled';

export const Filter = ({ setTypeAdvertisement }) => {
  return (
    <FormStyled>
      <select
        name="type"
        id="type"
        onChange={e => setTypeAdvertisement(e.target.value)}
      >
        <option value="all">Всі</option>
        <option value="sale">Продаж</option>
        <option value="buy">Купівля</option>
      </select>
    </FormStyled>
  );
};

Filter.propTypes = {
  setTypeAdvertisement: PropTypes.func.isRequired,
};
