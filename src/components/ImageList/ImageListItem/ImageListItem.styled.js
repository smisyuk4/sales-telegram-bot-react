import styled from '@emotion/styled';
import { flexBox, errorMessage } from '../../../mixins';

export const LiStyled = styled.li``;

export const ErrorStyled = styled.span`
  ${errorMessage}
  ${flexBox}
  height: 20px;
`;

export const ImageWrpStyled = styled.div`
  max-width: 100px;
`;

export const ImageStyled = styled.img`
  height: 70px;
  object-fit: cover;
`;
