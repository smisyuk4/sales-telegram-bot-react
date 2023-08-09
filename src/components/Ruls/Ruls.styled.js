import styled from '@emotion/styled';
import { flexBox } from '../../helpers/mixins';

export const RulsWrp = styled.div`
  margin: 0 auto;
  padding: 10px;
  max-width: 700px;

  border-radius: 12px;
  border: 1px solid;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  background-color: var(--tg-main-bg-color);

  h3 {
    text-align: center;
  }
`;

export const ExampleWrp = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ExampleStyled = styled.ul`
  padding: 5px;
  border-radius: 12px;
  background-color: var(--tg-second-bg-color, #0057b836);
`;

export const HintList = styled.ul`
  li {
    padding-left: 20px;
  }

  li::before {
    content: '✅';
    padding-right: 5px;
  }
`;

export const PhotoWrp = styled.ul`
  display: flex;
  gap: 10px;

  li {
    ${flexBox}
    height: 50px;
    width: 90px;
    overflow: hidden;
  }
`;
