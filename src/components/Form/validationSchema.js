import * as yup from 'yup';

const URL_REGEX =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const forbiddenWords = ['хуй', 'пісюн', 'срака', 'пізда', 'лох', 'курва'];

const WORDS_REGEX = new RegExp(`${forbiddenWords.join('|')}/gi`);

export const schema = yup
  .object({
    title: yup
      .string('Має бути текстовим')
      .trim()
      .min(3, 'Довжина має бути більше 3 символів')
      .max(10, 'Довжина має бути не більше 10 символів')
      .required('Обов`язкове поле'),
    description: yup
      .string('Має бути текстовим')
      .trim()
      .min(3, 'Довжина має бути більше 3 символів')
      .test(
        'test contain url',
        'Забороняються посилання на інші сайти',
        value => !URL_REGEX.test(value)
      )
      .test(
        'test contain forbidden words',
        'Заборонені слова',
        value => !WORDS_REGEX.test(value)
      )
      .max(100, 'Довжина має бути не більше 100 символів')
      .required('Обов`язкове поле'),
    cost: yup
      .string('Має бути текстовим')
      .trim()
      .min(3, 'Довжина має бути більше 3 символів')
      .max(10, 'Довжина має бути не більше 10 символів')
      .required('Обов`язкове поле'),
    contact: yup
      .string('Має бути текстовим')
      .trim()
      .min(3, 'Довжина має бути більше 3 символів')
      .max(10, 'Довжина має бути не більше 10 символів')
      .required('Обов`язкове поле'),
    // photo: {},
  })
  .required();
