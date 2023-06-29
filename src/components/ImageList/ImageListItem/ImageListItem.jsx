import PropTypes from 'prop-types';
import { LiStyled } from './ImageListItem.styled';

export const ImageListItem = ({ link, isPermitted }) => {
  return (
    <LiStyled>
      {isPermitted !== undefined && <p>{isPermitted}</p>}

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
  // isPermitted: PropTypes.bool
  isPermitted: PropTypes.string,
};
