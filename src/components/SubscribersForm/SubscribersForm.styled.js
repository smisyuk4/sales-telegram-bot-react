import styled from '@emotion/styled';
import { label, input, bigButton } from '../../helpers/mixins';

export const FormStyled = styled.form`
  display: flex;
  gap: 5px;
  label {
    ${label}
  }
  input {
    ${input}
    padding: 5px 8px;
    width: 100px;
  }
  button {
    ${bigButton}
    padding: 5px;
    width: 50px;
  }
`;

export const TitleStyled = styled.h2`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
`;
