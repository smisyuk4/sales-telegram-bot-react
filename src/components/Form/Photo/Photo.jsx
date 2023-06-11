import { Controller } from 'react-hook-form';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  DivStyled,
  LabelStyled,
  InputStyled,
  ErrorStyled,
} from './Photo.styled';

export const Photo = ({ control, register, errors }) => {
  const [multipleImages, setMultipleImages] = useState([]);

  const changeMultipleFiles = e => {
    if (e.target.files) {
      const imageArray = Array.from(e.target.files).map(file =>
        URL.createObjectURL(file)
      );
      setMultipleImages(prevImages => prevImages.concat(imageArray));
    }
  };

  console.log(multipleImages);
  return (
    <DivStyled>
      {/* <LabelStyled>
        <h2>Фото (до 5шт)</h2>
        <Controller
          control={control}
          name={'photo'}
          rules={{ required: 'Recipe picture is required' }}
          render={({ field: { value, onChange, ...field } }) => {
            return (
              <>
                <InputStyled
                  {...field}
                  value={value?.fileName}
                  onChange={event => {
                    onChange(event.target.files[0]);
                  }}
                  type="file"
                  multiple
                  accept="image/*"
                />
                <ErrorStyled>{errors.photo?.message}</ErrorStyled>
              </>
            );
          }}
        />
      </LabelStyled> */}
      <LabelStyled>
        <h2>Фото (до 5шт)</h2>
        <InputStyled
          {...register('photo')}
          // , { onChange: e => changeMultipleFiles(e) }
          onChange={changeMultipleFiles}
          type="file"
          // accept="image/*"

          multiple
        />
        <ErrorStyled>{errors.photo?.message}</ErrorStyled>
      </LabelStyled>
    </DivStyled>
  );
};

Photo.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
