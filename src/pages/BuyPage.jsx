import { useState, useEffect } from 'react';
import { useTelegram } from '../hooks/telegramHook';
import { BuyForm } from '../components/BuyForm/BuyForm';
import { getDatafromDb, checkPermission } from '../firebase/services';

const BuyPage = () => {
  const { user, onClose, queryId } = useTelegram();
  // const [data, setData] = useState([]);
  const [permissionMsg, setPermissionMsg] = useState({});

  useEffect(() => {
    const get = async () => {
      // const msg = await getDatafromDb('smisyuk');
      const permResult = await checkPermission(user);

      console.log('checkPermission', permResult);
      setPermissionMsg(permResult);
      // setData(msg);
    };
    get();
  }, [user, setPermissionMsg]);

  if (!user) {
    // if (user !== undefined) {
    return <p>Немає користувача</p>;
  }

  if (permissionMsg.permission === false) {
    return <p>{permissionMsg.text}</p>;
  }

  if (permissionMsg.permission === true) {
    return (
      <>
        <p>{permissionMsg.text}</p>
        <BuyForm user={user} queryId={queryId} onClose={onClose} />
      </>
    );
  }
};

export default BuyPage;
