import PropTypes from 'prop-types';
import { LiStyled, ErrorStyled, ImageStyled } from './ImageListItem.styled';

export const ImageListItem = ({ link, isPermitted }) => {
  return (
    <LiStyled>
      {isPermitted === false ? (
        <ErrorStyled>Помилка</ErrorStyled>
      ) : (
        <ErrorStyled></ErrorStyled>
      )}

      <ImageStyled
        className="image"
        src={link}
        alt=""
        key={link}
        loading="lazy"
        width="400"
        height="400"
      />
    </LiStyled>
  );
};

ImageListItem.propTypes = {
  link: PropTypes.string,
  isPermitted: PropTypes.bool,
};
