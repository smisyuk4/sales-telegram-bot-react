import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Navigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.config';

import { Footer } from '../components/Footer';
import { Container, Title, ReturnButton } from './pagesStyle';
import { RiArrowLeftLine } from 'react-icons/ri';
import { LoginForm } from '../components/LoginForm/LoginForm';

const LoginPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/" replace={true} />;
  }

  if (!user) {
    return (
      <Container>
        <div>
          <header>
            <>
              <ReturnButton
                className="return"
                onClick={() => navigate('/')}
                type="button"
                aria-label="return button"
              >
                <RiArrowLeftLine size="2em" />
              </ReturnButton>

              <Title>Вхід адміністратора</Title>
            </>
          </header>

          <main>
            <LoginForm />
          </main>
        </div>

        <Footer />
      </Container>
    );
  }
};

export default LoginPage;
