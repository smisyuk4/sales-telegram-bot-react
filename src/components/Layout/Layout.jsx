import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AdminEnterance } from '../AdminEnterance/AdminEnterance';
import { Footer } from '../Footer';

import { css } from '@emotion/react';

import {
  Container,
  TitleWrp,
  Title,
  NavList,
  NavItem,
  NavLinkStyled,
} from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <div>
        <header>
          <TitleWrp>
            <Title>Оголошення</Title>
            <AdminEnterance />
          </TitleWrp>

          <NavList>
            <NavItem>
              <NavLinkStyled to="/buy" aria-label="buy">
                Хочу купити
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/sale" aria-label="sale">
                Хочу продати
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/ruls" aria-label="ruls">
                Правила
              </NavLinkStyled>
            </NavItem>
          </NavList>
        </header>

        <Suspense
          fallback={<div>Зараз будуть сприятливі умови для торгівлі...</div>}
        >
          <main>
            <Outlet />
          </main>
        </Suspense>
      </div>

      <Footer />
    </Container>
  );
};
