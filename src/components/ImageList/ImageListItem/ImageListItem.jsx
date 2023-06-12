import PropTypes from 'prop-types';
import { LiStyled } from './ImageListItem.styled';

export const ImageListItem = ({ link }) => {
  return (
    <LiStyled>
      <img
        className="image"
        src={link}
        alt=""
        key={link}
        width="100"
        height="100"
      />
    </LiStyled>
  );
};

ImageListItem.propTypes = {
  link: PropTypes.string,
};
