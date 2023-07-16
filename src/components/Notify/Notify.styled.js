import styled from '@emotion/styled';
import { flexBox } from '../../mixins';

export const TitleStyle = styled.h1`
  font-size: 20px;
  text-align: center;
`;

export const MessageStyled = styled.div`
  ${flexBox}
  padding: 7px;
  height: 150px;
  background-color: #fffdc3;
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`;

export const ItemStyled = styled.li`
  display: flex;
  justify-content: center;
  padding: 3px;

  width: 90px;
  text-align: center;
  /* transform: rotate(-90deg); */

  background-color: #fffdc3;
  box-shadow: 0px 15px 10px -15px #111;

  &:hover {
    color: #0057b8;
    background-color: #ffd700;
  }
`;
