import styled from '@emotion/styled';
import { input } from '../../../helpers/mixins';

export const FormStyled = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  padding: 5px 0;

  select {
    ${input}
    padding: 5px 5px;
    width: 130px;
  }
`;
