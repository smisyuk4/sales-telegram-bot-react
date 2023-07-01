const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => {
    alert('close')
    tg.close();
  };

  return {
    onClose,
    tg,
    user: tg?.initDataUnsafe?.user,
  };
};
