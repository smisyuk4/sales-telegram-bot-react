import { db } from '../firebase/firebase.config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

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

export const getDatafromDb = async (user) => {
    if (!user){
        return
    }
  // const querySnapshot = await getDocs(collection(db, 'users'));
  // querySnapshot.forEach(doc => {
  //   console.log(`${doc.id}`, doc.data());
  // });

  const querySnapshot = await getDocs(
    collection(db, 'users', user, 'messages')
  );
  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data());
  });
};
