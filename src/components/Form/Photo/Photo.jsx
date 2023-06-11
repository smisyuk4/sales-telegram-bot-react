import { Controller } from 'react-hook-form';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  DivStyled,
  LabelStyled,
  InputStyled,
  ErrorStyled,
} from './Photo.styled';

export const Photo = ({
  control,
  register,
  errors,
  setMultipleImages,
  multipleImages,
}) => {
  const [picture, setPicture] = useState(null);

  const onChangePicture = e => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  // const [multipleImages, setMultipleImages] = useState([]);

  // Functions to preview multiple images
  const changeMultipleFiles = e => {
    if (e.target.files) {
      const imageArray = Array.from(e.target.files).map(file =>
        URL.createObjectURL(file)
      );
      setMultipleImages(prevImages => prevImages.concat(imageArray));
    }
  };

  // console.log('picture', picture);
  console.log('picture', multipleImages);
  return (
    <DivStyled>
      <LabelStyled>
        <h2>Фото (до 5шт)</h2>
        <InputStyled
          {...register('photo')}
          // onChange={onChangePicture}
          onChange={changeMultipleFiles}
          type="file"
          accept="image/*"
          multiple
        />
        <ErrorStyled>{errors.photo?.message}</ErrorStyled>
      </LabelStyled>
      {/* <div>
        <img src={picture} alt="Girl in a jacket" width="100" height="100" />
      </div> */}
      <div>
        {multipleImages?.map(image => (
          <img
            className="image"
            src={image}
            alt=""
            key={image}
            width="100"
            height="100"
          />
        ))}
      </div>
    </DivStyled>
  );
};

Photo.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
