import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ImageList } from '../../ImageList/ImageList';
import {
  DivStyled,
  LabelStyled,
  InputStyled,
  ErrorStyled,
} from './Photo.styled';
import { salesApi } from '../../../salesApi';

export const Photo = ({ register, errors }) => {
  const [multipleImages, setMultipleImages] = useState([]);
  const [previewImage, setPreviewImage] = useState([]);

  useEffect(() => {
    if (
      multipleImages === null ||
      multipleImages === undefined ||
      multipleImages.length === 0
    ) {
      return;
    }
    const fetch = async () => {
      const result = await salesApi('/check-photos', multipleImages);
      console.log('result', result);
    };
    fetch();
  }, [multipleImages]);

  const changeMultipleFiles = e => {
    if (!e.target.files) {
      return;
    }
    const formData = new FormData();
    const fileList = e.target.files;

    for (const key of Object.keys(fileList)) {
      formData.append('photos', fileList[key]);
      setPreviewImage(prev => [...prev, URL.createObjectURL(fileList[key])]);
    }

    setMultipleImages(formData);
  };

  return (
    <DivStyled>
      <LabelStyled>
        <h2>Фото (до 5шт)</h2>
        <InputStyled
          {...register('photos')}
          onChange={changeMultipleFiles}
          type="file"
          accept="image/jpeg image/png"
          multiple
        />
        <ErrorStyled>{errors.photos?.message}</ErrorStyled>
      </LabelStyled>

      {previewImage.length > 0 && <ImageList array={previewImage} />}
    </DivStyled>
  );
};

Photo.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
