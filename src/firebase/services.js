import { db } from '../firebase/firebase.config';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { format, formatDistance } from 'date-fns';
import { uk } from 'date-fns/locale';

export const addDatatoDb = async () => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getDatafromDb = async user => {
  if (!user) {
    return;
  }

  let data = [];
  const querySnapshot = await getDocs(
    collection(db, 'users', user, 'messages')
  );
  querySnapshot.forEach(doc => {
    const msg = {
      msgId: doc.id,
      ...doc.data(),
    };
    data = [...data, msg];
  });
  return data;
};

export const checkPermission = async array => {
  const lastMsg = array[array.length - 1];
  return dateConverter(lastMsg.updatedAt.seconds);
};

const dateConverter = timestamp => {
  const date = new Date(timestamp * 1000);

  const timeBetween = formatDistance(new Date(), date, {
    locale: uk,
  });

  const dateLastMsg = format(Date.parse(date), 'dd MMMM yyyy о HH:mm', {
    locale: uk,
  });

  return `Ваше останне оголошення було ${dateLastMsg}, з того часу минуло ${timeBetween}`;
};

// https://date-fns.org/v2.30.0/docs/formatDistance
