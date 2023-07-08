import styled from '@emotion/styled';
import { errorMessage, bigButton } from '../../../mixins';

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
  position: relative;
  h2 {
    margin-bottom: 5px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.4;
  }

  p {
    position: absolute;
    top: 0;
    right: 0;
    font-style: italic;
    color: blue;
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-5px, 7px);

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;

    border: 0;
    border-radius: 50%;
    background-color: #61616170;

    &:active {
      background-color: black;
      color: white;
    }
  }
`;

export const InputStyled = styled.input`
  display: none;
`;

export const ButtonStyled = styled.button`
  ${bigButton}
`;

export const ErrorStyled = styled.span`
  ${errorMessage}
`;
