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

export const TitleStyle = styled.h1`
  padding: 5px;
  text-align: center;
  background-color: white;
  border-radius: 12px;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
