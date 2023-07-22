import { useState, useEffect } from 'react';
import { useTelegram } from '../hooks/telegramHook';
import { BuyForm } from '../components/BuyForm/BuyForm';
import { getDatafromDb, checkPermission } from '../firebase/services';

const BuyPage = () => {
  const { user, onClose, queryId } = useTelegram();
  const [data, setData] = useState([]);

  useEffect(() => {
    const get = async () => {
      const msg = await getDatafromDb('smisyuk');
      console.log('checkPermission', await checkPermission(msg));
      setData(msg);
    };
    get();
  }, [user, setData]);

  console.log(data);
  if (data.length === 0) {
    return <p>Немає користувача</p>;
  }

  if (data.length > 0) {
    return <BuyForm user={user} queryId={queryId} onClose={onClose} />;
  }
};

export default BuyPage;
