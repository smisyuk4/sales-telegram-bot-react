import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.config';
import { logoutUser } from '../firebase/services';
import { RiArrowLeftLine, RiLogoutBoxRFill } from 'react-icons/ri';
import { ErrorStyled, TitleStyle } from './pagesStyle';

const AdminPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = async () => {
    console.log('logut');
    const result = await logoutUser();
    navigate('/');

    console.log('logoutUser => ', result);
  };

  if (user) {
    return (
      <div>
        <button
          onClick={() => navigate(-1)}
          type="button"
          aria-label="return button"
        >
          <RiArrowLeftLine size="2em" />
        </button>

        <button onClick={logout} type="button" aria-label="logout button">
          <RiLogoutBoxRFill size="2em" />
        </button>

        <TitleStyle>Сторінка адміністратора</TitleStyle>
      </div>
    );
  }
};

export default AdminPage;
