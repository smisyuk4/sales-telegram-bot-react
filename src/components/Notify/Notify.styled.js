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
  background-color: #fff;
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
  /* transform: rotate(-90deg); */

  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 6px 6px 6px;

  &:hover {
    color: #0057b8;
    background-color: #ffd700;
  }
`;

export const TextStyled = styled.p`
  /* transform: rotate(-90deg); */
  text-align: center;
`;
