import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { RiArrowLeftLine, RiLogoutBoxRFill } from 'react-icons/ri';

import { auth } from '../firebase/firebase.config';
import { logoutUser } from '../firebase/services';
import { TEXT_MSG } from '../firebase/errorsAndMessages';
import { Container, DevInfo, HeaderAdminStyled } from './pagesStyle';

const AdminPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = async () => {
    const result = await logoutUser();

    if (result === TEXT_MSG.signOutSuccessful) {
      Notify.success(TEXT_MSG.signOutSuccessful);
      navigate('/home');
      return;
    }
  };

  if (!user) {
    return <Navigate to="/home" replace={true} />;
  }

  if (user) {
    return (
      <Container>
        <div>
          <HeaderAdminStyled>
            <button
              className="return"
              onClick={() => navigate(-1)}
              type="button"
              aria-label="return button"
            >
              <RiArrowLeftLine size="2em" />
            </button>

            <h1>Сторінка адміністратора</h1>

            <button
              className="exit"
              onClick={logout}
              type="button"
              aria-label="logout button"
            >
              <RiLogoutBoxRFill size="2em" />
            </button>
          </HeaderAdminStyled>

          <Suspense
            fallback={<div>Зараз будуть сприятливі умови для торгівлі...</div>}
          >
            <main>
              <Outlet />
            </main>
          </Suspense>
        </div>

        <footer>
          <DevInfo>
            <p>Розроблено</p>
            <a href="mailto:smisyuk@gmail.com">smisyuk@gmail.com</a>
          </DevInfo>
        </footer>
      </Container>
    );
  }
};

export default AdminPage;
