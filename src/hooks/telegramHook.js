const tg = window.Telegram.webApp;

export const useTelegram = () => {
  const onClose = () => {
    tg.onClose();
  };

  return {
    onClose,
    tg,
    user: tg.initDataUnsafe?.user,
  };
};
