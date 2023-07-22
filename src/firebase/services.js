import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  deleteUser,
} from 'firebase/auth';

import { db, auth } from '../firebase/firebase.config';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { format, formatDistanceToNowStrict } from 'date-fns';
import { uk } from 'date-fns/locale';

export const loginUser = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return error.code;
  }
};

export const logoutUser = async () => {
  const result = await signOut(auth)
    .then(() => {
      return 'Ви  вийшли з профілю адміністратора';
    })
    .catch(error => {
      return error.code;
    });

  return result;
};

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

export const checkPermission = async user => {
  if (!user) {
    return;
  }
  const data = await getDatafromDb(user);
  const lastMsg = data[data.length - 1];
  return dateConverter(lastMsg.updatedAt.seconds);
};

const dateConverter = timestamp => {
  const limit = 1; //hour
  const date = new Date(timestamp * 1000);

  const dateLastMsg = format(Date.parse(date), 'dd MMMM yyyy о HH:mm', {
    locale: uk,
  });

  const timeBetween = formatDistanceToNowStrict(date, {
    unit: 'hour',
    locale: uk,
  });

  console.log(timeBetween);
  let hour = timeBetween.split(' ');
  hour = Number(hour[0]);
  //   hour = 1;
  console.log(hour);
  const difference = limit - hour;

  if (hour < limit) {
    return {
      permission: false,
      text: `Зараз не можна публікувати, треба почекати ще ${difference} годин${
        difference <= 1
          ? 'у або менше'
          : difference == 2 || difference == 3 || difference == 4
          ? 'и або менше'
          : ''
      }`,
    };
  }

  return {
    permission: true,
    text: `Ваше останне оголошення було ${dateLastMsg}, з того часу минуло ${timeBetween}`,
  };
};

// https://date-fns.org/v2.30.0/docs/formatDistance
// https://date-fns.org/v2.30.0/docs/formatDistanceToNowStrict
