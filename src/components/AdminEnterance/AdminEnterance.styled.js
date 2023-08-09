import styled from '@emotion/styled';

export const AdminButtonStyled = styled.button`
  position: absolute;
  right: 0;
  transform: translateX(-15px);

  color: var(--tg-main-text-color, #000);
  border: none;
  background-color: inherit;

  cursor: pointer;

  &:hover,
  &:focus {
    color: #0057b8;
  }
`;
