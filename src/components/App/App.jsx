import { Form } from '../Form';
import { useTelegram } from '../../hooks/telegramHook';
import { Container, Title } from './App. styled';

export const App = () => {
  const { user, onClose } = useTelegram();
  return (
    <Container>
      <Title> Оголошення </Title>
      {/* <p>Привіт {user}</p>
      <button onClick={onClose} type="button">
        Вийти
      </button> */}
      <Form />
    </Container>
  );
};
