import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.config';

import { LoginStyled, ReturnButton } from './pagesStyle';
import { RiArrowLeftLine } from 'react-icons/ri';
import { LoginForm } from '../components/LoginForm/LoginForm';

const LoginPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  if (user) {
    navigate('/');
  }

  if (!user) {
    return (
      <LoginStyled>
        <ReturnButton
          onClick={() => navigate(-1)}
          type="button"
          aria-label="return button"
        >
          <RiArrowLeftLine size="2em" />
        </ReturnButton>

        <LoginForm />
      </LoginStyled>
    );
  }
};

export default LoginPage;
