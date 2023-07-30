import styled from '@emotion/styled';
import { label, input, errorMessage, bigButton } from '../../../mixins';

export const LabelStyled = styled.label`
  ${label}
`;

export const InputWrp = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContactButton = styled.button`
  ${bigButton}
  padding: 0;

  & {
    width: 20%;

    @media screen and (min-width: 480px) {
      width: 11%;
    }
  }
`;

export const InputStyled = styled.input`
  ${input}
`;

export const ErrorStyled = styled.span`
  ${errorMessage}
  white-space: pre-wrap;
`;
