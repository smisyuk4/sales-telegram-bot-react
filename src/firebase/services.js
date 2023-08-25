import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { db, auth } from '../firebase/firebase.config';
import {
  collection,
  collectionGroup,
  getCountFromServer,
  addDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  doc,
  setDoc,
} from 'firebase/firestore';
import { dateConverterClientSide } from '../helpers/date';
// import { formatDistanceToNowStrict, formatDistance } from 'date-fns';
// import { uk } from 'date-fns/locale';

const { VITE_COLLECTION } = import.meta.env;

export const loginUser = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
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

// demo method
// export const addDatatoDb = async () => {
//   try {
//     const docRef = await addDoc(collection(db, 'users'), {
//       first: 'Ada',
//       last: 'Lovelace',
//       born: 1815,
//     });
//     console.log('Document written with ID: ', docRef.id);
//   } catch (e) {
//     console.error('Error adding document: ', e);
//   }
// };

export const getCountAdvertisement = async type => {
  try {
    const q = query(collectionGroup(db, 'messages'), where('type', '==', type));
    const snapshot = await getCountFromServer(q);

    return snapshot.data().count;
  } catch (error) {
    return error;
  }
};

export const getCountSubscribers = async () => {
  try {
    const docRef = doc(db, VITE_COLLECTION, 'countSubscriber');
    const docSnap = await getDoc(docRef);

    return docSnap.data();
  } catch (error) {
    return error;
  }
};

export const setCountSubscribers = async (signedUp, count) => {
  const docRef = doc(db, VITE_COLLECTION, 'countSubscriber');

  try {
    const result = await setDoc(docRef, {
      signedUp: signedUp,
      remains: Number(count),
    })
      .then(() => {
        return 'Запис в базі оновлено';
      })
      .catch(error => {
        return error.code;
      });

    return result;
  } catch (error) {
    return error;
  }
};

export const getDataByFilter = async type => {
  let data = [];

  if (type === 'all') {
    return getAll();
  }

  try {
    const condition = query(
      collectionGroup(db, 'messages'),
      where('type', '==', type),
      orderBy('createdAt')
    );

    const querySnapshot = await getDocs(condition);
    querySnapshot.forEach(doc => {
      const msg = {
        msgId: doc.id,
        ...doc.data(),
      };
      data = [...data, msg];
    });

    return data;
  } catch (error) {
    return error;
  }
};

export const getAll = async () => {
  let data = [];

  try {
    const condition = collectionGroup(db, 'messages');

    const querySnapshot = await getDocs(condition);
    querySnapshot.forEach(doc => {
      const msg = {
        msgId: doc.id,
        ...doc.data(),
      };
      data = [...data, msg];
    });

    const sortedByDate = data.sort(
      (first, second) => first.createdAt.seconds - second.createdAt.seconds
    );

    return sortedByDate;
  } catch (error) {
    return error;
  }
};

export const getDatafromDb = async (user, type) => {
  if (!user) {
    return;
  }

  let data = [];
  try {
    const q = query(
      collection(db, VITE_COLLECTION, user, 'messages'),
      where('type', '==', type)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      const msg = {
        msgId: doc.id,
        ...doc.data(),
      };
      data = [...data, msg];
    });

    return data;
  } catch (error) {
    return error;
  }
};

export const checkPermission = async (user, type) => {
  if (!user) {
    return {
      permission: false,
      text: 'Немає користувача',
    };
  }

  if (user === 'alex_mnko') {
    return {
      permission: true,
      text: `Привіт мій володарю!`,
    };
  }
  try {
    const data = await getDatafromDb(user, type);
    if (data.length === 0) {
      return {
        permission: true,
        text: 'Це буде перше оголошення',
      };
    }

    const lastMsg = data[data.length - 1];
    return dateConverterClientSide(lastMsg.updatedAt.seconds);
  } catch (error) {
    return error;
  }
};

// const dateConverter = timestamp => {
//   const limit = 60; //minutes
//   const date = new Date(timestamp * 1000);

//   const timeBetween = formatDistanceToNowStrict(date, {
//     unit: 'minute',
//     locale: uk,
//   });

//   let minutes = timeBetween.split(' ');
//   minutes = Number(minutes[0]);

//   const difference = limit - minutes;

//   if (difference === 60) {
//     return {
//       permission: false,
//       text: `До розміщення наступного оголошення \nзалишилaсь 01 : 00 год`,
//     };
//   }

//   if (minutes < limit) {
//     return {
//       permission: false,
//       text: `До розміщення наступного оголошення \nзалишилось 00 : ${difference} хв`,
//     };
//   }

//   const timeBetweenLastMsg = formatDistance(date, new Date(), {
//     locale: uk,
//   });

//   return {
//     permission: true,
//     text: `Ваше останнє оголошення було \nопубліковано ${timeBetweenLastMsg} тому`,
//   };
// };

// https://date-fns.org/v2.30.0/docs/formatDistance
// https://date-fns.org/v2.30.0/docs/formatDistanceToNowStrict
