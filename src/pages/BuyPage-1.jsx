import { useTelegram } from '../hooks/telegramHook';
import { BuyForm } from '../components/BuyForm/BuyForm';
import { getDatafromDb } from '../firebase/services';

const BuyPage = () => {
  const { user, onClose, queryId } = useTelegram();
  console.log(getDatafromDb());
  return <BuyForm user={user} queryId={queryId} onClose={onClose}/>;
};

export default BuyPage;
