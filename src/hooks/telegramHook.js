const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => {
    tg.close();
  };

  const onSend = data => {
    tg.sendData(JSON.stringify(data));
  };

  return {
    onClose,
    onSend,
    tg,
    user: tg.initDataUnsafe?.user?.username,
    queryId: tg.initDataUnsafe?.query_id,
    chat: tg.initDataUnsafe?.chat,
  };
};
