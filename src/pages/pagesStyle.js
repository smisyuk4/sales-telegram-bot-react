import styled from '@emotion/styled';
import { flexBox } from '../mixins';
import wall from '../assets/wall.jpeg';
import errorIcon from '../assets/errorIcon.svg';

export const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  header,
  main {
    margin-bottom: 10px;
  }
`;

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
`;

export const TitleStyle = styled.h1`
  padding: 5px;
  text-align: center;
  background-color: white;
  border-radius: 12px;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const MessageVisit = styled.p`
  font-size: 14px;
  font-style: italic;
  color: blue;
`;

export const LoginStyled = styled.div`
  ${flexBox}
  height: 100vh;
`;

export const ReturnButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(5px, 5px);

  padding: 10px;
  cursor: pointer;

  border: none;
  background-color: inherit;

  &:hover,
  &:focus {
    color: #0057b8;
  }
`;

export const HeaderAdminStyled = styled.header`
  ${flexBox}
  justify-content: space-between;
  border-bottom: 2px solid black;

  h1 {
    text-align: center;
    text-transform: uppercase;
  }

  button {
    border: none;
    background-color: inherit;
    cursor: pointer;

    &:hover,
    &:focus {
      color: #0057b8;
    }

    &.return {
      padding-right: 30px;
    }

    &.exit {
      padding-left: 30px;
    }
  }
`;

export const DevInfo = styled.div`
  ${flexBox}

  gap: 5px;
  margin-bottom: 10px;
  font-size: 12px;

  a {
    text-decoration: underline;
    color: #0057b8;

    &:hover {
      background-color: #ffd700;
    }
  }
`;
