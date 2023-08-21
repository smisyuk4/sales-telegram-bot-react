import { useTelegram } from '../hooks/telegramHook';
import { AdminForm } from '../components/AdminForm';

const AdminFormPage = () => {
  const { user, onClose, queryId } = useTelegram();

  return <AdminForm queryId={queryId} />;
};

export default AdminFormPage;
