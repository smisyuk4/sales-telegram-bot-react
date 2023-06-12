import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  DivStyled,
  LabelStyled,
  InputStyled,
  ErrorStyled,
} from './Photo.styled';
import { salesApi } from '../../../salesApi';

export const Photo = ({ register, errors }) => {
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    if (picture === null || picture === undefined) {
      return;
    }
    const fetch = async () => {
      console.log('picture', picture);
      const formData = new FormData();

      formData.append('file', picture);
      const result = await salesApi('/onefile', formData);
      console.log('result', result);
    };
    fetch();
  }, [picture]);

  const onChangePicture = e => {
    setPicture(e.target.files[0]);
  };

  return (
    <DivStyled>
      <div>
        <LabelStyled>
          <h2>Фото (1шт)</h2>
          <InputStyled
            {...register('photo1')}
            onChange={onChangePicture}
            type="file"
            accept="image/jpeg image/png"
          />
          <ErrorStyled>{errors.photo?.message}</ErrorStyled>
        </LabelStyled>
        {picture && (
          <div>
            <img
              src={URL.createObjectURL(picture)}
              alt="Girl in a jacket"
              width="100"
              height="100"
            />
          </div>
        )}
      </div>
      <div>
        <LabelStyled>
          <h2>Фото (до 5шт)</h2>
          <InputStyled
            {...register('photo5')}
            onChange={onChangePicture}
            type="file"
            accept="image/jpeg image/png"
            // multiple
          />
          <ErrorStyled>{errors.photo?.message}</ErrorStyled>
        </LabelStyled>

        {/* {multipleImages?.map(image => (
          <img
            className="image"
            src={image}
            alt=""
            key={image}
            width="100"
            height="100"
          />
        ))} */}
      </div>
    </DivStyled>
  );
};

Photo.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
