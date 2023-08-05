import styled from '@emotion/styled';
import { flexBox } from '../../helpers/mixins';

export const DevInfo = styled.div`
  ${flexBox}

  gap: 5px;
  font-size: 12px;
  margin-bottom: 15px;

  a {
    text-decoration: underline;
    color: #0057b8;

    &:hover {
      background-color: #ffd700;
    }
  }
`;
