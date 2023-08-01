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
  width: 50px;
`;

export const InputStyled = styled.input`
  ${input}
`;

export const ErrorStyled = styled.span`
  ${errorMessage}
`;
