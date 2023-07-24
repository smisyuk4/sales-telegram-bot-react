import styled from '@emotion/styled';
import { label, input, errorMessage } from '../../../mixins';

export const LabelStyled = styled.label`
  ${label}

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-5px, 8px);

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;

    border-radius: 50%;
    background-color: buttonface;
    border: 1px solid black;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    color: black;
    cursor: pointer;

    &:active {
      background-color: black;
      color: white;
    }
  }
`;

export const InputStyled = styled.input`
  ${input}

  &.contact {
    padding-right: 40px;
  }
`;

export const ErrorStyled = styled.span`
  ${errorMessage}
  white-space: pre-wrap;
`;
