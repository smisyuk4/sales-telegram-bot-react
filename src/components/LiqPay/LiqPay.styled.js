import styled from '@emotion/styled';
import { container, bigButton } from '../../helpers/mixins';

export const DivStyled = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  max-width: 500px;

  button {
    ${bigButton}
    background-color: green
  }
`;
