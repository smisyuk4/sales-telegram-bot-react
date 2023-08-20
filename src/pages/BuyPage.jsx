import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { checkPermission } from '../firebase/services';
import { useTelegram } from '../hooks/telegramHook';
import { Loader } from '../components/Loader';
import { BuyForm } from '../components/BuyForm/BuyForm';
import { Message, MessageTransfer, BotLink } from './pagesStyle';

import { makeValues } from '../helpers/liqpay';
import { SUCCESS } from '../helpers/constants';
import { salesApi } from '../salesApi';

const { VITE_BOT_NAME } = import.meta.env;
const AXIOS_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
};

Notify.init({
  borderRadius: '8px',
  useIcon: false,
  plainText: false,
  fontSize: '18px',
  success: {
    textColor: '#ffd700',
    background: '#0057b8',
  },
  failure: {
    background: '#ff5549',
  },
});

const BuyPage = () => {
  const { user, queryId } = useTelegram();
  const [permissionMsg, setPermissionMsg] = useState({});
  const [isShowAlert, setIsShowAlert] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPaymentPage, isShowPaymentPage] = useState(false);

  useEffect(() => {
    const get = async () => {
      // const permResult = await checkPermission('anonym', 'buy');
      const permResult = await checkPermission(user, 'buy');
      setPermissionMsg(permResult);
    };
    get();
  }, [user, setPermissionMsg]);

  const getPaymentForm = async data => {
    const { dataBase64, signatureBase64 } = await makeValues();

    const SCRIPT_URL = 'https://static.liqpay.ua/libjs/checkout.js';
    const container = document.body || document.head;
    const script = document.createElement('script');
    script.src = SCRIPT_URL;
    script.onload = () => {
      // eslint-disable-next-line no-undef
      LiqPayCheckout.init({
        data: dataBase64,
        signature: signatureBase64,
        embedTo: '#liqpay_checkout',
        language: 'uk',
        mode: 'embed', // embed || popup
      })
        .on('liqpay.callback', function ({ status, order_id, payment_id }) {
          console.log('status ', status);

          if (status === SUCCESS) {
            sendToTelegram(data, order_id, payment_id);
          }
        })
        .on('liqpay.ready', function (data) {
          console.log(data);
          // ready
        })
        .on('liqpay.close', function (data) {
          console.log(data);
          // close
        });
    };
    container.appendChild(script);
  };

  const sendToTelegram = async (data, order_id, payment_id) => {
    setIsLoading(true);

    const dataPackage = JSON.stringify({
      user,
      queryId,
      type: 'buy',
      payment: true,
      order_id,
      payment_id,
      ...data,
    });
    try {
      const checkContent = await salesApi(
        '/web-data-buy',
        dataPackage,
        AXIOS_CONFIG
      );
      if (checkContent) {
        Notify.success(`Ваше оголошення відправлено!`);
        setIsLoading(false);
        return;
      }
    } catch (error) {
      Notify.failure(`Помилка відправки оголошення! <br> ${error.message}`);
      setIsLoading(false);
    }
  };

  if (!user) {
  // if (user !== undefined) {
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
        {isLoading && <Loader />}
        {isShowAlert && <Message>{permissionMsg.text}</Message>}
        {showPaymentPage ? (
          <div id="liqpay_checkout"></div>
        ) : (
          <BuyForm
            user={user}
            isLoading={isLoading}
            isShowPaymentPage={isShowPaymentPage}
            getPaymentForm={getPaymentForm}
          />
        )}
      </>
    );
  }
};

export default BuyPage;
