import styled from '@emotion/styled';
import { flexBox } from '../mixins';
import wall from '../assets/wall.jpeg';

export const HomeStyled = styled.div`
  ${flexBox}

  background-image: url(${wall});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 600px;
`;
