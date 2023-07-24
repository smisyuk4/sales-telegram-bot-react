import styled from '@emotion/styled';
import { flexBox, container, pageTitle, returnButton } from '../mixins';
import wall from '../assets/wall.jpeg';
import errorIcon from '../assets/errorIcon.svg';

// pages
export const HomeStyled = styled.div`
  ${flexBox}
  align-items: flex-start;
  padding-top: 70px;

  background-image: url(${wall});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 600px;
`;

export const ErrorStyled = styled(HomeStyled)`
  background-image: url(${errorIcon});
  background-size: auto;
  height: 100vh;

  h1 {
    ${pageTitle}
    padding: 10px 15px;
    border-radius: 12px;
    border: 1px solid;
    background-color: #fff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
`;

export const LoginStyled = styled.div`
  ${flexBox}
  height: 100vh;
`;

// components
export const Container = styled.div`
  ${container}

  header {
    ${flexBox}
    border-bottom: 2px solid black;
  }

  form {
    left: 50%;
    position: relative;
    transform: translateX(-50%);
  }
`;

export const Title = styled.h1`
  ${pageTitle}
`;

export const Message = styled.p`
  font-size: 14px;
  font-style: italic;
  color: #0057b8;
`;

export const MessageTransfer = styled(Message)`
  text-align: center;
`;

export const ReturnButton = styled.button`
  ${returnButton}
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(15px, 15px);

  @media screen and (min-width: 480px) {
    transform: translate(10px, 25px);
  }
`;

export const BotLink = styled.a`
  margin-left: 5px;
  font-weight: 700;
  text-align: center;
  color: #0057b8;

  &:hover {
    background-color: #ffd700;
  }
`;
