import { useTelegram } from '../hooks/telegramHook';
import { BuyForm } from '../components/BuyForm/BuyForm';
import { getDatafromDb } from '../firebase/services';

const BuyPage = () => {
  const { user, onClose, queryId } = useTelegram();
  alert(`user - ${user}`)

  if (getDatafromDb(user)) {
    return <p>Немає користувача</p>;
  }

  if (getDatafromDb(user)) {
    return <BuyForm user={user} queryId={queryId} onClose={onClose} />;
  }
};

export default BuyPage;
