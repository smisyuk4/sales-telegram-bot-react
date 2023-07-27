import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ImageList } from '../../ImageList/ImageList';
import {
  PhotoWrp,
  LabelStyled,
  InputStyled,
  ErrorStyled,
  ButtonStyled,
} from './Photo.styled';
import { salesApi } from '../../../salesApi';
import { useTelegram } from '../../../hooks/telegramHook';

export const Photo = ({
  register,
  photoError,
  setPhotos,
  setPhotoError,
  previewImage,
  setPreviewImage,
  setIsLoading,
}) => {
  const { user, onClose, queryId, platform } = useTelegram();
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
      setIsLoading(true);
      setPhotoError('');

      try {
        const { resultCheck } = await salesApi(
          '/check-photo/some',
          multipleImages
        );

        // console.log();

        const status = resultCheck.map(({ isPermitted }) => isPermitted);
        const checkStatus = status.find(element => element === false);

        if (checkStatus === undefined) {
          const photoURL = resultCheck.map(({ imageURL }) => imageURL);
          setPhotos(photoURL);
        }

        setImagesAfterCheck(resultCheck);
      } catch (error) {
        console.log('/check-photo/some => ', error);
        setPhotoError(error.message);
      }
      setIsFinishCheck(true);
      setIsLoading(false);
    };
    fetch();
  }, [multipleImages]);

  const changeMultipleFiles = e => {
    setPreviewImage([]);
    setImagesAfterCheck([]);

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

  const androidGetFiles = e => {
    // setPreviewImage([]);
    // setImagesAfterCheck([]);

    if (!e.target.files) {
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

  const getFile = () => {
    document.getElementById('upfile').click();
  };

  return (
    <PhotoWrp>
      <LabelStyled>
        <h2>Фото</h2>
        <span>* до 5 шт i не більше 10мб кожна</span>

        <InputStyled
          id="upfile"
          {...register('photos')}
          // onChange={changeMultipleFiles}
          onChange={androidGetFiles}
          type="file"
          accept="image/jpeg image/png"
          multiple
        />
      </LabelStyled>

      <ButtonStyled onClick={getFile} type="button" aria-label="Load">
        {isFinishCheck ? <p>Завантажити</p> : <p>Перевірка фото змісту...</p>}
      </ButtonStyled>
      <ErrorStyled>{photoError}</ErrorStyled>

      {previewImage.length > 0 && (
        <ImageList array={previewImage} imagesAfterCheck={imagesAfterCheck} />
      )}
    </PhotoWrp>
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
