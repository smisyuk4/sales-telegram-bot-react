import { ImageListItem } from './ImageListItem/ImageListItem';
import PropTypes from 'prop-types';
import { UlStyled } from './ImageList.styled';

export const ImageList = ({ array }) => {
  return (
    <UlStyled>
      {array.map((item, index) => (
        <ImageListItem link={item} key={index} />
      ))}
    </UlStyled>
  );
};

ImageList.propTypes = {
  array: PropTypes.array.isRequired,
};
