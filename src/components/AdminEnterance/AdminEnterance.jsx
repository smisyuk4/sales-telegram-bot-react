import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RiFileList3Fill, RiAdminFill } from 'react-icons/ri';

import { auth } from '../../firebase/firebase.config';
import { AdminButtonStyled } from './AdminEnterance.styled';

export const AdminEnterance = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  if (user) {
    return (
      <>
        <AdminButtonStyled
          onClick={() => navigate('/admin-panel')}
          type="button"
          aria-label="Contact"
        >
          <RiFileList3Fill size="2em" />
        </AdminButtonStyled>
      </>
    );
  }

  if (!user) {
    return (
      <>
        <AdminButtonStyled
          onClick={() => navigate('/login', { replace: true })}
          type="button"
          aria-label="Contact"
        >
          <RiAdminFill size="2em" />
        </AdminButtonStyled>
      </>
    );
  }
};
