import { useState, useEffect } from 'react';

import { checkPermission } from '../firebase/services';
import { useTelegram } from '../hooks/telegramHook';
import { SaleForm } from '../components/SaleForm';
import { Message, MessageTransfer, BotLink } from './pagesStyle';

const SalePage = () => {
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
    return (
      <>
        <MessageTransfer>
          Немає користувача. <br /> Запускай бота
          <BotLink
            href="https://t.me/cat_gm_bot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to telegram bot"
          >
            @cat_gm_bot
          </BotLink>
        </MessageTransfer>
      </>
    );
  }

  if (permissionMsg.permission === false) {
    return <Message>{permissionMsg.text}</Message>;
  }

  if (permissionMsg.permission === true) {
    const timerId = setTimeout(() => {
      setIsShowAlert(false);
      clearTimeout(timerId);
    }, 4000);

    return (
      <>
        {isShowAlert && <Message>{permissionMsg.text}</Message>}
        <SaleForm user={user} queryId={queryId} onClose={onClose} />
      </>
    );
  }
};

export default SalePage;
