import { useState, useEffect } from 'react';
import { useTelegram } from '../hooks/telegramHook';
import { BuyForm } from '../components/BuyForm/BuyForm';
import { getDatafromDb, checkPermission } from '../firebase/services';
import { MessageVisit } from './pagesStyle';

const BuyPage = () => {
  const { user, onClose, queryId } = useTelegram();
  // const [data, setData] = useState([]);
  const [permissionMsg, setPermissionMsg] = useState({});
  const [isShowAlert, setIsShowAlert] = useState(false);

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
    setIsShowAlert(true);

    return <MessageVisit>{permissionMsg.text}</MessageVisit>;
  }

  if (permissionMsg.permission === true) {
    setIsShowAlert(true);

    const timerId = setTimeout(() => {
      setIsShowAlert(false);
      clearTimeout(timerId);
    }, 1500);

    return (
      <>
        {isShowAlert && <MessageVisit>{permissionMsg.text}</MessageVisit>}

        <BuyForm user={user} queryId={queryId} onClose={onClose} />
      </>
    );
  }
};

export default BuyPage;
