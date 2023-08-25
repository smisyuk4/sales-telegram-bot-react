import { ImageListItem } from './ImageListItem/ImageListItem';
import PropTypes from 'prop-types';
import { UlStyled } from './ImageList.styled';

export const ImageList = ({ array, imagesAfterCheck }) => {
  if (imagesAfterCheck === undefined) {
    return (
      <UlStyled>
        {array.map((item, index) => (
          <ImageListItem link={item} key={index} />
        ))}
      </UlStyled>
    );
  }

  const check = index => {
    const res = imagesAfterCheck[index]?.isPermitted;

    if (res === undefined) {
      return undefined;
    }

    if (res) {
      return true;
    }
    return false;
  };
  return (
    <UlStyled>
      {array.map((item, index) => (
        <ImageListItem link={item} key={index} isPermitted={check(index)} />
      ))}
    </UlStyled>
  );
};

ImageList.propTypes = {
  array: PropTypes.array.isRequired,
  imagesAfterCheck: PropTypes.array,
};
