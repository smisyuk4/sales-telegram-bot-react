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
  const [imagesAfterCheck, setImagesAfterCheck] = useState([]);
  const [isFinishCheck, setIsFinishCheck] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (
      multipleImages === null ||
      multipleImages === undefined ||
      multipleImages.length === 0
    ) {
      return;
    }
    const fetch = async () => {
      setIsFinishCheck(false);
      try {
        console.log('before salesApi ===> ', multipleImages[0]);
        const { resultCheck } = await salesApi(
          '/uploads-some-photos',
          multipleImages
        );
        // alert('after salesApi ');
        setImagesAfterCheck(resultCheck);
      } catch (error) {
        console.log('salesApi ===>', error);
        // alert('salesApi ===>', error.message);
        setError(error.message);
      }
      setIsFinishCheck(true);
    };
    fetch();
  }, [multipleImages]);

  const changeMultipleFiles = e => {
    if (!e.target.files) {
      return;
    }

    if (e.target.files.length > 5) {
      setError('Можна лише до 5 фото');
      return;
    }

    const formData = new FormData();
    const fileList = e.target.files;

    for (const key of Object.keys(fileList)) {
      const photo = fileList[key];
      // const newName = `${Date.now()}_${photo.name}`;
      formData.append('photos', photo);
      setPreviewImage(prev => [...prev, URL.createObjectURL(photo)]);
    }

    setMultipleImages(formData);
  };

  return (
    <DivStyled>
      <LabelStyled>
        <h2>Фото (до 5шт)</h2>
        {error && <p>{error}</p>}
        <InputStyled
          {...register('photos')}
          onChange={changeMultipleFiles}
          type="file"
          accept="image/jpeg image/png"
          multiple
        />
        <ErrorStyled>{errors.photos?.message}</ErrorStyled>
      </LabelStyled>

      {previewImage.length > 0 && (
        <>
          {!isFinishCheck && <p>Перевірка фото змісту...</p>}
          <ImageList array={previewImage} imagesAfterCheck={imagesAfterCheck} />
        </>
      )}
    </DivStyled>
  );
};

Photo.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
