import { useEffect, useState } from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri';
import { FormStyled, TitleStyled } from './SubscribersForm.styled';

export const SubscribersForm = () => {
  const [countSubscribers, setCountSubscribers] = useState('');

  const sendCount = async () => {
    console.log(countSubscribers);
    setCountSubscribers('');
  };

  return (
    <>
      <TitleStyled>Ввести кількість підписників в каналі</TitleStyled>

      <FormStyled>
        <input
          value={countSubscribers}
          onChange={e => setCountSubscribers(e.target.value)}
          placeholder="0"
        />
        <button onClick={sendCount} type="button" aria-label="Send">
          <RiSendPlane2Fill />
        </button>
      </FormStyled>
    </>
  );
};
