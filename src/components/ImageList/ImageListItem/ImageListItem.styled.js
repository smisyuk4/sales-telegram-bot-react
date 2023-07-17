import styled from '@emotion/styled';
import { flexBox, errorMessage } from '../../../mixins';

export const LiStyled = styled.li`
  max-width: 80px;
`;

export const ErrorStyled = styled.span`
  ${errorMessage}
  ${flexBox}
  height: 30px;
  min-width: 60px;
  text-align: center;
  line-height: 1;
`;

export const ImageStyled = styled.img`
  height: 70px;
  object-fit: cover;
`;
