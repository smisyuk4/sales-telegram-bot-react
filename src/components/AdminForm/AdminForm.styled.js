import styled from '@emotion/styled';
import {
  formWrp,
  label,
  input,
  textArea,
  errorMessage,
  bigButton,
  sendButton,
  flexBox,
} from '../../helpers/mixins';

export const FormStyled = styled.form`
  ${formWrp}
`;

export const LabelStyled = styled.label`
  ${label}
`;

export const TypeStyled = styled.div`
  ${label}
`;

export const PaymentStyled = styled.div`
  ${label}
`;

export const InputStyled = styled.input`
  ${input}
`;

export const RadioStyled = styled.div`
  ${flexBox}

  justify-content: flex-start;
  label {
    ${flexBox}
  }

  input {
    margin-left: 20px;
  }

  h5 {
    margin-left: 10px;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.2;
    font-style: italic;
  }
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
