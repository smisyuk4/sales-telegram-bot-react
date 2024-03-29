import styled from '@emotion/styled';
import { flexBox } from '../../helpers/mixins';

export const ModalDiv = styled.div`
  ${flexBox}
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  z-index: 200;
  width: 100vw;
  height: 100vh;
  background-color: #00000080;
  padding: 50px 10px;

  div {
    position: relative;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 400;
  transform: translate(-10px, 10px);

  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: black;
  border-radius: 12px;
  border: 1px solid;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: pointer;

  &:active {
    background-color: black;
    color: white;
  }
`;
