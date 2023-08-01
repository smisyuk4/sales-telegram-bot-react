import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { RiLoaderLine } from 'react-icons/ri';
import { HiOutlinePlus, HiArrowPath, HiArchiveBoxXMark } from 'react-icons/hi2';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { ImageList } from '../../ImageList/ImageList';
import {
  PhotoWrp,
  LabelStyled,
  InputStyled,
  ErrorStyled,
  ButtonsWrp,
  ButtonStyled,
} from './Photo.styled';
import { salesApi } from '../../../salesApi';
import { useTelegram } from '../../../hooks/telegramHook';
import { TEXT_MSG } from '../../../firebase/errorsAndMessages';

Notify.init({
  borderRadius: '8px',
  useIcon: false,
  plainText: false,
  fontSize: '18px',
  success: {
    textColor: '#ffd700',
    background: '#0057b8',
  },
  failure: {
    background: '#ff5549',
  },
});

export const Photo = ({
  register,
  photoError,
  setPhotos,
  setPhotoError,
  previewImage,
  setPreviewImage,
  setIsLoading,
  removePhotos,
}) => {
  const { user, onClose, queryId, platform } = useTelegram();
  const [multipleImages, setMultipleImages] = useState([]);
  const [imagesAfterCheck, setImagesAfterCheck] = useState([]);
  const [isFinishCheck, setIsFinishCheck] = useState(true);
  const [isFinishCheckOne, setIsFinishCheckOne] = useState(true);

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

        const searchError = resultCheck.find(
          item => item === TEXT_MSG.cannotConvert
        );
        if (searchError) {
          setPhotoError('Щось пішло не по плану. Спробуй з початку');
        }

        const status = resultCheck.map(({ isPermitted }) => isPermitted);
        const checkStatus = status.find(element => element === false);

        if (checkStatus === undefined) {
          const photoURL = resultCheck.map(({ imageURL }) => imageURL);
          setPhotos({ isPermitted: true, photoURL });
        }

        setImagesAfterCheck(resultCheck);
      } catch (error) {
        if (error.response?.data === TEXT_MSG.fileSize) {
          return setPhotoError('Заборонений розмір файлу');
        }
        if (error.response?.data === TEXT_MSG.unexpectedFile) {
          return setPhotoError('Неочікуваний файл/и');
        }
        if (error.code === TEXT_MSG.network) {
          return setPhotoError('Якісь проблеми. Спробуй трішки пізніше');
        }
        setPhotoError(error.code);
      } finally {
        setIsFinishCheck(true);
        setIsLoading(false);
      }
    };
    fetch();
  }, [multipleImages, setPhotos, setIsFinishCheck, setIsLoading, setPhotoError]);

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

  const androidGetFile = async e => {
    if (!e.target.files[0]) {
      return;
    }
    setIsLoading(true);
    setIsFinishCheckOne(false);

    const oneImage = e.target.files[0];
    const formData = new FormData();
    const newName = `${Date.now()}_${oneImage.name}`;

    formData.append('photo', oneImage, newName);
    setPreviewImage(prev => [...prev, URL.createObjectURL(oneImage)]);

    try {
      const { resultCheck } = await salesApi('/check-photo/one', formData);
      console.log(resultCheck);

      if (resultCheck === TEXT_MSG.cannotConvert) {
        setPhotoError('Щось пішло не по плану. Спробуй з початку');
      }

      setPhotos({
        isPermitted: resultCheck.isPermitted,
        photoURL: [resultCheck.imageURL],
      });

      setImagesAfterCheck(prev => [...prev, resultCheck]);
    } catch (error) {
      if (error.response?.data === TEXT_MSG.fileSize) {
        return setPhotoError('Заборонений розмір файлу');
      }
      if (error.response?.data === TEXT_MSG.unexpectedFile) {
        return setPhotoError('Неочікуваний файл/и');
      }
      if (error.code === TEXT_MSG.network) {
        return setPhotoError('Якісь проблеми. Спробуй трішки пізніше');
      }
      setPhotoError(error.code);
    } finally {
      setIsFinishCheckOne(true);
      setIsLoading(false);
    }
  };

  const getSomeFiles = () => {
    if (platform === 'android') {
      alert('Прикро, але ви можете обирати лише по 1 фото');
    }
    document.getElementById('upfiles').click();
  };

  const getOneFile = () => {
    document.getElementById('onefile').click();
  };

  const removeAllPhotos = () => {
    removePhotos();
    setPreviewImage([]);
    setImagesAfterCheck([]);
    setPhotoError('');
    Notify.success(`Всі фото видалені! <br> Завантажуй заново`);
  };

  return (
    <PhotoWrp>
      <LabelStyled>
        <h2>Фото</h2>
        <span>* до 5 шт i не більше 10мб кожна</span>

        <InputStyled
          id="upfiles"
          {...register('photos')}
          onChange={changeMultipleFiles}
          type="file"
          accept="image/jpeg image/png"
          multiple
        />

        <InputStyled
          id="onefile"
          {...register('photos')}
          onChange={androidGetFile}
          type="file"
          accept="image/jpeg image/png"
        />
      </LabelStyled>

      <ButtonsWrp>
        <ButtonStyled
          className="load-some"
          onClick={getSomeFiles}
          type="button"
          aria-label="Load some photo"
        >
          {isFinishCheck ? <p>Завантажити</p> : <p>Перевірка...</p>}
        </ButtonStyled>

        <ButtonStyled
          className="load-one"
          onClick={getOneFile}
          disabled={previewImage.length === 5}
          type="button"
          aria-label="Load one photo"
        >
          {isFinishCheckOne ? <HiOutlinePlus /> : <HiArrowPath />}
        </ButtonStyled>

        <ButtonStyled
          className="remove"
          onClick={removeAllPhotos}
          disabled={previewImage.length === 0}
          type="button"
          aria-label="remove all photos"
        >
          <HiArchiveBoxXMark />
        </ButtonStyled>
      </ButtonsWrp>

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
  setIsLoading: PropTypes.func.isRequired,
  removePhotos: PropTypes.func.isRequired,
};
