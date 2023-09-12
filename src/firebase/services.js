import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { db, auth } from '../firebase/firebase.config';
import {
  collection,
  collectionGroup,
  getCountFromServer,
  updateDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  doc,
} from 'firebase/firestore';
import { dateConverterClientSide } from '../helpers/date';

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

export const getCountAdvertisement = async type => {
  try {
    const q = query(collectionGroup(db, 'messages'), where('type', '==', type));
    const snapshot = await getCountFromServer(q);

    return snapshot.data().count;
  } catch (error) {
    return error;
  }
};

export const getCountSubscribersBot = async () => {
  try {
    const docRef = doc(db, VITE_COLLECTION, 'countSubscriber');
    const docSnap = await getDoc(docRef);
    const { installBot } = docSnap.data();
    return installBot.length;
  } catch (error) {
    return error;
  }
};

export const updateCountSubscribers = async remains => {
  const docRef = doc(db, VITE_COLLECTION, 'countSubscriber');

  try {
    const result = await updateDoc(docRef, {
      remains,
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
