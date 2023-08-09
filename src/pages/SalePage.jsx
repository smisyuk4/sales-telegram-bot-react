import { useState, useEffect } from 'react';

import { checkPermission } from '../firebase/services';
import { useTelegram } from '../hooks/telegramHook';
import { SaleForm } from '../components/SaleForm';
import { Message, MessageTransfer, BotLink } from './pagesStyle';

const { VITE_BOT_NAME } = import.meta.env;

const SalePage = () => {
  const { user, onClose, queryId } = useTelegram();
  const [permissionMsg, setPermissionMsg] = useState({});
  const [isShowAlert, setIsShowAlert] = useState(true);

  useEffect(() => {
    const get = async () => {
<<<<<<< HEAD
         // const permResult = await checkPermission('smisyuk', 'sale');
      const permResult = await checkPermission(user, 'sale');
=======
      const permResult = await checkPermission('smisyuk');
      // const permResult = await checkPermission(user);
>>>>>>> 8fb8d6b8 (theme color)
      setPermissionMsg(permResult);
    };
    get();
  }, [user, setPermissionMsg]);

  // if (!user) {
  if (user !== undefined) {
    return (
      <>
        <MessageTransfer>
          Немає користувача. <br />
          <span>
            Можливо треба перейти в налаштування Telegram, редагувати профіль,
            встановити ім'я користувача.
          </span>
          <br />
          Запускай бота
          <BotLink
            href={`https://t.me/${VITE_BOT_NAME}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to telegram bot"
          >
            {`@${VITE_BOT_NAME}`}
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
