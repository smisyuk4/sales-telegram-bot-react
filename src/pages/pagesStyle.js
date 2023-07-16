import styled from '@emotion/styled';
import { flexBox } from '../mixins';
import wall from '../assets/wall.jpeg';
import errorIcon from '../assets/errorIcon.svg';

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
