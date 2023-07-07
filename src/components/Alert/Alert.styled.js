import styled from '@emotion/styled';

export const DivStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 45px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1500;

  font-size: 18px;
  line-height: 14px;
  font-weight: 600;
  border-radius: 12px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  color: #ffd700;
  background-color: #0057b8;
`;
