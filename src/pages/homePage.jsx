import { Notify } from '../components/Notify';
import { HomeStyled } from './pagesStyle';
import { firebaseConfig, db } from '../firebase/firebase.config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const HomePage = () => {
  console.log('firebaseConfig = ', firebaseConfig);

  const addDatatoDb = async () => {
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

  // addDatatoDb();

  const getDatafromDb = async () => {
    // const querySnapshot = await getDocs(collection(db, 'users'));
    // querySnapshot.forEach(doc => {
    //   console.log(`${doc.id}`, doc.data());
    // });

    const querySnapshot = await getDocs(
      collection(db, 'users', 'smisyuk', 'messages')
    );
    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  };

  getDatafromDb();
  return (
    <HomeStyled>
      <Notify />
    </HomeStyled>
  );
};

export default HomePage;
