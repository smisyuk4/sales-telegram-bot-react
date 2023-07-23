import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { flexBox } from '../../mixins';

export const Container = styled.div`
  padding: 15px 15px 0 15px;
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

export const TitleWrp = styled.div`
  ${flexBox}
`;

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
`;

export const NavItem = styled.li`
  width: calc(100% / 3);
`;

export const NavLinkStyled = styled(NavLink)`
  ${flexBox}
  height: 100%;
  padding: 3px;

  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: black;
  cursor: pointer;

  &.active {
    color: #ffd700;
    background-color: #0057b8;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }

  &:hover {
    color: #0057b8;
    background-color: #ffd700;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }
`;
