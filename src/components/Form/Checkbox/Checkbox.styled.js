import styled from '@emotion/styled';

export const DivStyled = styled.div`
  h2 {
    margin-bottom: 5px;
    font-size: 24px;
    font-weight: 600;
    line-height: 18px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const RulsLink = styled.h3`
  font-size: 18px;
  line-height: 14px;
  text-decoration: underline;
  color: blue;
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
  border: 2px solid black;
  cursor: pointer;

  &.checked {
    background-color: green;
    border-color: green;
  }

  &.checked::before {
    content: '\u2714';
    font-size: 24px;
    color: #fff;
  }
`;

export const ErrorStyled = styled.span`
  font-style: italic;
  color: red;
`;
