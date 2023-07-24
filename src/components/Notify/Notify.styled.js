import styled from '@emotion/styled';

export const MessageWrp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  padding: 7px;
  height: 150px;
  background-color: #fffdc3;
`;

export const MessageTitle = styled.h1`
  font-size: 20px;
  text-align: center;
`;

export const ChannelLink = styled.a`
  font-weight: 700;
  text-align: center;
  color: #0057b8;

  &:hover {
    background-color: #ffd700;
  }
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
