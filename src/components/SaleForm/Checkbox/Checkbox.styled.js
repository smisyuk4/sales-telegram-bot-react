import styled from '@emotion/styled';
import { errorMessage } from '../../../helpers/mixins';

export const DivStyled = styled.div`
  h2 {
    margin-bottom: 5px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.4;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const RulsLink = styled.h3`
  font-size: 18px;
  line-height: 1.2;
  text-decoration: underline;
  color: #0057b8;
  cursor: pointer;
`;

export const CheckBoxStyled = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  outline: none;

  width: 24px;
  height: 24px;
  border-radius: 5px;
  margin-right: 10px;
  border: 2px solid var(--tg-main-text-color, #000);;
  cursor: pointer;

  &.checked {
    background-color: #4cde4c;
    border-color: #4cde4c;
  }

  &.checked::before {
    content: '\u2714';
    font-size: 24px;
  }
`;

export const ErrorStyled = styled.span`
  ${errorMessage}
`;
