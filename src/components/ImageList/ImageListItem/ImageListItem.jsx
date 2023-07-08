import PropTypes from 'prop-types';
import {
  LiStyled,
  ErrorStyled,
  ImageWrpStyled,
  ImageStyled,
} from './ImageListItem.styled';

export const ImageListItem = ({ link, isPermitted }) => {
  return (
    <LiStyled>
      {isPermitted !== undefined && <p>{isPermitted}</p>}

      <ErrorStyled>Помилка</ErrorStyled>
      
      <ImageWrpStyled>
        <ImageStyled
          className="image"
          src={link}
          alt=""
          key={link}
          loading="lazy"
          width="400"
          height="400"
        />
      </ImageWrpStyled>
    </LiStyled>
  );
};

ImageListItem.propTypes = {
  link: PropTypes.string,
  isPermitted: PropTypes.string,
};
