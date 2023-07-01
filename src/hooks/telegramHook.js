const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => {
    alert('close');
    tg.close();
    alert('after close');
  };

  const onSend = data => {
    alert('send');
    tg.sendData(JSON.stringify(data));
    alert('after send');
  };

  return {
    onClose,
    onSend,
    tg,
    user: tg.initDataUnsafe?.user?.username,
    queryId: tg.initDataUnsafe?.query_id,
  };
};
