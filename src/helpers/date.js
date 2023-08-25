import { formatDistanceToNowStrict, formatDistance, format } from 'date-fns';
import { uk } from 'date-fns/esm/locale';

// export const dateConverterAdminSide = timestamp => {
//   //   const date = new Date(timestamp.toDate());
//   const date = new Date(timestamp * 1000);

//   return format(Date.parse(date), 'dd MMMM, yyyy | HH:mm', { locale: uk });
// };

export const dateConverterAdminSide = (timestamp, template) => {
  const date = new Date(timestamp * 1000);

  return format(Date.parse(date), template, { locale: uk });
};

export const dateConverterClientSide = timestamp => {
  const limit = 60; //minutes
  const date = new Date(timestamp * 1000);

  const timeBetween = formatDistanceToNowStrict(date, {
    unit: 'minute',
    locale: uk,
  });

  let minutes = timeBetween.split(' ');
  minutes = Number(minutes[0]);

  const difference = limit - minutes;

  if (difference === 60) {
    return {
      permission: false,
      text: `До розміщення наступного оголошення \nзалишилaсь 01 : 00 год`,
    };
  }

  if (minutes < limit) {
    return {
      permission: false,
      text: `До розміщення наступного оголошення \nзалишилось 00 : ${difference} хв`,
    };
  }

  const timeBetweenLastMsg = formatDistance(date, new Date(), {
    locale: uk,
  });

  return {
    permission: true,
    text: `Ваше останнє оголошення було \nопубліковано ${timeBetweenLastMsg} тому`,
  };
};

// https://date-fns.org/v2.30.0/docs/formatDistance
// https://date-fns.org/v2.30.0/docs/formatDistanceToNowStrict
