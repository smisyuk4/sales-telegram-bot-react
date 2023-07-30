import styled from '@emotion/styled';
import { label, errorMessage, bigButton } from '../../../mixins';

export const PhotoWrp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
  ${label}

  span {
    margin-bottom: 5px;
    font-size: 14px;
    font-style: italic;
  }
`;

export const InputStyled = styled.input`
  display: none;
`;

export const ButtonsWrp = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonStyled = styled.button`
  ${bigButton}

  &.load-some {
    width: 60%;

    @media screen and (min-width: 480px) {
      width: 80%;
    }
  }

  &.load-one {
    width: 20%;

    @media screen and (min-width: 480px) {
      width: 10%;
    }
  }

  &.remove {
    width: 20%;

    @media screen and (min-width: 480px) {
      width: 10%;
    }
  }

  &[disabled] {
    color: #dddddd;
    border-color: #efefef4d;

    &:active {
      background-color: #efefef4d;
      color: #dddddd;
    }
  }
`;

export const ErrorStyled = styled.span`
  ${errorMessage}
`;
