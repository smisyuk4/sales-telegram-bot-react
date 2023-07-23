import { useState, useEffect } from 'react';

import { checkPermission } from '../firebase/services';
import { useTelegram } from '../hooks/telegramHook';
import { BuyForm } from '../components/BuyForm/BuyForm';
import { MessageVisit } from './pagesStyle';

const BuyPage = () => {
  const { user, onClose, queryId } = useTelegram();
  const [permissionMsg, setPermissionMsg] = useState({});
  const [isShowAlert, setIsShowAlert] = useState(true);

  useEffect(() => {
    const get = async () => {
      // const permResult = await checkPermission('smisyuk');
      const permResult = await checkPermission(user);

      setPermissionMsg(permResult);
    };
    get();
  }, [user, setPermissionMsg]);

  if (!user) {
    // if (user !== undefined) {
    return <p>Немає користувача</p>;
  }

  if (permissionMsg.permission === false) {
    return <MessageVisit>{permissionMsg.text}</MessageVisit>;
  }

  if (permissionMsg.permission === true) {
    const timerId = setTimeout(() => {
      setIsShowAlert(false);
      clearTimeout(timerId);
    }, 4000);

    return (
      <>
        {isShowAlert && <MessageVisit>{permissionMsg.text}</MessageVisit>}
        <BuyForm user={user} queryId={queryId} onClose={onClose} />
      </>
    );
  }
};

export default BuyPage;
