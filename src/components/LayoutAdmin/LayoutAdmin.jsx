import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { RiArrowLeftLine, RiLogoutBoxRFill, RiHome2Fill } from 'react-icons/ri';

import { auth } from '../../firebase/firebase.config';
import { logoutUser } from '../../firebase/services';
import { TEXT_MSG } from '../../firebase/errorsAndMessages';
import {
  Container,
  TitleWrp,
  DevInfo,
  HeaderAdminStyled,
  NavList,
  NavItem,
  NavLinkStyled,
} from './LayoutAdmin.styled';

Confirm.init({
  cssAnimationDuration: 'delay',
  borderRadius: '8px',
  buttonsFontSize: '18px',
  titleFontSize: '18px',
  messageFontSize: '18px',
  titleColor: '#0057b8',
  okButtonBackground: '#0057b8',
});

Notify.init({
  borderRadius: '8px',
  useIcon: false,
  plainText: false,
  fontSize: '18px',
  success: {
    textColor: '#ffd700',
    background: '#0057b8',
  },
});

export const LayoutAdmin = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = async () => {
    Confirm.show(
      'Вихід з профілю',
      'Дійсно хочеш вийти?',
      'Так',
      'Ні',
      async () => {
        const result = await logoutUser();

        if (result === TEXT_MSG.signOutSuccessful) {
          Notify.success(TEXT_MSG.signOutSuccessful);
          navigate('/');
          return;
        }
      }
    );
  };

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  if (user) {
    return (
      <Container>
        <div>
          <HeaderAdminStyled>
            <TitleWrp>
              <div>
                <button
                  className="return"
                  onClick={() => navigate(-1)}
                  type="button"
                  aria-label="return button"
                >
                  <RiArrowLeftLine size="2em" />
                </button>

                <button
                  className="home"
                  onClick={() => navigate('/')}
                  type="button"
                  aria-label="home button"
                >
                  <RiHome2Fill size="2em" />
                </button>
              </div>

              <h1>Сторінка адміністратора</h1>

              <button
                className="exit"
                onClick={logout}
                type="button"
                aria-label="logout button"
              >
                <RiLogoutBoxRFill size="2em" />
              </button>
            </TitleWrp>

            <NavList>
              <NavItem>
                <NavLinkStyled
                  to="/admin/statistics"
                  aria-label="statistics table"
                >
                  Статистика
                </NavLinkStyled>
              </NavItem>

              <NavItem>
                <NavLinkStyled to="/admin/form" aria-label="send form">
                  Відправити оголошення
                </NavLinkStyled>
              </NavItem>
            </NavList>
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
