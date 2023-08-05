import styled from '@emotion/styled';
import { label, input, errorMessage, bigButton } from '../../../helpers/mixins';

export const LabelStyled = styled.label`
  ${label}
`;

export const InputWrp = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
`;

export const ContactButton = styled.button`
  ${bigButton}
  width: 50px;
`;

export const InputStyled = styled.input`
  ${input}

  &:focus + .example {
    display: inline-block;
  }
`;

export const ExampleStyled = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  transform: translateY(-50px);

  padding: 5px 10px;
  border-radius: 8px;

  font-size: 14px;
  font-style: italic;
  text-align: center;
  color: #ffd700;
  background-color: #0057b8;

  display: none;
`;

export const ErrorStyled = styled.span`
  ${errorMessage}
`;
