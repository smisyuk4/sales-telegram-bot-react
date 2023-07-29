import styled from '@emotion/styled';
import {
  formWrp,
  label,
  input,
  textArea,
  errorMessage,
  bigButton,
  sendButton,
} from '../../mixins';

export const FormStyled = styled.form`
  ${formWrp}
`;

export const LabelStyled = styled.label`
  ${label}
`;

export const InputStyled = styled.input`
  ${input}
`;

export const TextAreaStyled = styled.textarea`
  ${textArea}
`;

export const ErrorStyled = styled.span`
  ${errorMessage}
`;

export const PayButton = styled.button`
  ${bigButton}
`;

export const ButtonStyled = styled.button`
  ${bigButton}
  ${sendButton}
`;
