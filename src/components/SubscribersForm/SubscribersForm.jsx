import { useEffect, useState } from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import { setCountSubscribers } from '../../firebase/services';

import { FormStyled, TitleStyled } from './SubscribersForm.styled';

Notify.init({
  borderRadius: '8px',
  useIcon: false,
  plainText: false,
  fontSize: '18px',
  success: {
    textColor: '#ffd700',
    background: '#0057b8',
  },
  failure: {
    background: '#ff5549',
  },
});

export const SubscribersForm = ({ signedUp }) => {
  const [count, setCount] = useState('');

  const sendCount = async () => {
    const result = await setCountSubscribers(signedUp, count);
    Notify.success(`${result}`);
    setCount('');
  };

  return (
    <>
      <TitleStyled>Ввести поточну кількість</TitleStyled>

      <FormStyled>
        <input
          value={count}
          onChange={e => setCount(e.target.value)}
          placeholder="0"
        />
        <button onClick={sendCount} type="button" aria-label="Send">
          <RiSendPlane2Fill />
        </button>
      </FormStyled>
    </>
  );
};

SubscribersForm.propTypes = {
  signedUp: PropTypes.number,
};
