import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  flexBox,
  container,
  pageTitle,
  returnButton,
} from '../../helpers/mixins';

export const Container = styled.div`
  ${container}
`;

export const TitleWrp = styled.div`
  ${flexBox}
  justify-content: space-between;
`;

export const LeftNav = styled.div`
  ${flexBox}
`;

export const Title = styled.h1`
  ${pageTitle}
`;

export const AdminButtons = styled.button`
  ${returnButton}

  &.home {
    padding-right: 15px;
  }

  &.exit {
    padding-left: 15px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--tg-main-text-color, #000);
`;

export const NavItem = styled.li`
  width: calc(100% / 2);
`;

export const NavLinkStyled = styled(NavLink)`
  ${flexBox}
  height: 100%;
  padding: 3px;

  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: black;
  cursor: pointer;

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }

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
