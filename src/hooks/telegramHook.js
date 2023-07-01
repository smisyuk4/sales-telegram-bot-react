const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => {
    alert('close')
    tg.close();
    alert('after close')
  };

  const onSend = (data) =>{
    alert('send')
    tg.sendData(data)
    alert('after send')
  }

  return {
    onClose,
    tg,
    user: tg.initDataUnsafe?.user?.username
  };
};
