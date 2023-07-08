import styled from '@emotion/styled';
import { flexBox, errorMessage } from '../../../mixins';

export const LiStyled = styled.li`
  max-width: 80px;
`;

export const ErrorStyled = styled.span`
  ${errorMessage}
  ${flexBox}
  height: 20px;
  min-width: 60px;
`;

export const ImageStyled = styled.img`
  height: 70px;
  object-fit: cover;
`;
