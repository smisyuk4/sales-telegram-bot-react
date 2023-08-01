import * as yup from 'yup';
import { forbiddenWords } from './forbiddenWords';

const URL_REGEX =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

// const PHONE_OR_CONTACT_REGEX = /(^0[3-9]\d{8}$|^@\w+[^\s!@"#№$%:;^*()=+]+)$/gim;
const CONTACT_AND_PHONE_REGEX = /^@\w+[^\s!@"#№$%:;^*()=+](\/0[3-9]\d{8})?$/gim;
const WORDS_REGEX = new RegExp(`${forbiddenWords.join('|')}`, 'gi');

const COST_SYMBOLS_REGEX = /[+-_!@#$%^~&]/gm;
const COST_NUMBERS_REGEX = /^[^0][0-9]+$/gi;
const COST_ZERO_REGEX = /^0/gi;

export const LIMIT_CHAR_DESC = 100;

export const SaleSchema = yup
  .object({
    isAccept: yup
      .bool()
      .oneOf([true], 'Має бути погоджено')
      .required('Обов`язкове поле'),

    title: yup
      .string('Має бути текстовим')
      .trim()
      .min(3, 'Довжина має бути більше 3 символів')
      .max(30, 'Довжина має бути не більше 30 символів')
      .test(
        'test contain forbidden words',
        'Заборонені слова',
        value => !WORDS_REGEX.test(value)
      )
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
      .max(
        LIMIT_CHAR_DESC,
        `Довжина має бути не більше ${LIMIT_CHAR_DESC} символів`
      )
      .test(
        'test contain forbidden words',
        'Заборонені слова',
        value => !WORDS_REGEX.test(value)
      )
      .required('Обов`язкове поле'),

    cost: yup
      .string()
      .trim()
      .min(2, 'Має бути більше 9 грн')
      .test(
        'test symbols',
        'заборонений символ',
        value => !COST_SYMBOLS_REGEX.test(value)
      )
      .test(
        'test zero',
        'заборонений 0 на початку',
        value => !COST_ZERO_REGEX.test(value)
      )
      .matches(COST_NUMBERS_REGEX, 'Має бути ціле, додатнє число')

      .max(6, `Має бути менше 1 мільона`)
      .required('Обов`язкове поле'),

    contact: yup
      .string('Має бути текстовим')
      .trim()
      .min(5, 'Довжина має бути більше 5 символів')
      .max(30, 'Довжина має бути не більше 30 символів')
      .matches(
        CONTACT_AND_PHONE_REGEX,
        "Приклад ім'я @qweqwe_3, обов'язково @\nПриклад номера 0503523445, тільки 10 цифр\nПриклад разом @qweqwe_3/0503523445, розділення через /"
      )
      .required('Обов`язкове поле'),

    photoURL: yup
      .array()
      .min(1, 'Має бути 1 або більше фото')
      .required('Обов`язкове поле'),
  })
  .required();

export const BuySchema = yup
  .object({
    isAccept: yup
      .bool()
      .oneOf([true], 'Має бути погоджено')
      .required('Обов`язкове поле'),

    title: yup
      .string('Має бути текстовим')
      .trim()
      .min(3, 'Довжина має бути більше 3 символів')
      .max(30, 'Довжина має бути не більше 30 символів')
      .test(
        'test contain forbidden words',
        'Заборонені слова',
        value => !WORDS_REGEX.test(value)
      )
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
      .max(
        LIMIT_CHAR_DESC,
        `Довжина має бути не більше ${LIMIT_CHAR_DESC} символів`
      )
      .test(
        'test contain forbidden words',
        'Заборонені слова',
        value => !WORDS_REGEX.test(value)
      )
      .required('Обов`язкове поле'),

    contact: yup
      .string('Має бути текстовим')
      .trim()

      .min(5, 'Довжина має бути більше 5 символів')
      .max(30, 'Довжина має бути не більше 30 символів')
      .matches(
        CONTACT_AND_PHONE_REGEX,
        "Приклад ім'я @qweqwe_3, обов'язково @\nПриклад номера 0503523445, тільки 10 цифр\nПриклад разом @qweqwe_3/0503523445, розділення через /"
      )
      .required('Обов`язкове поле'),
  })
  .required();
