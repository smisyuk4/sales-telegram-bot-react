import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Container,
  Title,
  NavList,
  NavItem,
  NavLinkStyled,
  DevInfo,
} from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <div>
        <header>
          <Title>Оголошення</Title>

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

      <footer>
        <DevInfo>
          <p>Розроблено</p>
          <a href="mailto:smisyuk@gmail.com">smisyuk@gmail.com</a>
        </DevInfo>
      </footer>
    </Container>
  );
};
