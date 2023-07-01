const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => {
    tg.onClose();
  };

  return {
    onClose,
    tg,
    // user: tg.initDataUnsafe?.user,
  };
};
