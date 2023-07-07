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

export const Photo = ({
  register,
  photoError,
  setPhotos,
  setPhotoError,
  previewImage,
  setPreviewImage,
}) => {
  const [multipleImages, setMultipleImages] = useState([]);
  const [imagesAfterCheck, setImagesAfterCheck] = useState([]);
  const [isFinishCheck, setIsFinishCheck] = useState(true);

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
      setPhotoError('');

      try {
        const { resultCheck } = await salesApi(
          '/check-photo/some',
          multipleImages
        );

        const status = resultCheck.map(({ isPermitted }) => isPermitted);
        const checkStatus = status.find(element => element === false);

        if (checkStatus === undefined) {
          const photoURL = resultCheck.map(({ imageURL }) => imageURL);
          setPhotos(photoURL);
        }

        setImagesAfterCheck(resultCheck);
      } catch (error) {
        setPhotoError(error.message);
      }
      setIsFinishCheck(true);
    };
    fetch();
  }, [multipleImages]);

  const changeMultipleFiles = e => {
    setPreviewImage([]);

    if (!e.target.files) {
      return;
    }

    if (e.target.files.length > 5) {
      setPhotoError('Має бути 5 або менше фото');
      return;
    }

    const formData = new FormData();
    const fileList = e.target.files;
    let previewPhotoURL = [];

    for (const key of Object.keys(fileList)) {
      const photo = fileList[key];
      const newName = `${Date.now()}_${photo.name}`;

      formData.append('photos', photo, newName);
      previewPhotoURL = [...previewPhotoURL, URL.createObjectURL(photo)];
    }

    setPreviewImage(previewPhotoURL);
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
        <ErrorStyled>{photoError}</ErrorStyled>
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
  photoError: PropTypes.string.isRequired,
  setPhotos: PropTypes.func.isRequired,
  setPhotoError: PropTypes.func.isRequired,
  previewImage: PropTypes.array.isRequired,
  setPreviewImage: PropTypes.func.isRequired,
};
