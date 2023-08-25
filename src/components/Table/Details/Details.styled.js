import styled from '@emotion/styled';

export const DivStyled = styled.div`
  padding: 30px;

  color: var(--tg-main-text-color, #000);

  border-radius: 12px;
  border: 1px solid;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  background-color: var(--tg-main-bg-color, #fff);

  h2 {
    margin: 0 auto;
    max-width: 250px;
    text-align: center;
  }
`;

export const TextStyled = styled.span`
  font-weight: 700;
  color: #0057b8;
`;
