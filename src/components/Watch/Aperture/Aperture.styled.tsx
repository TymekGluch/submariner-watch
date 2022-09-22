import styled from 'styled-components';
import { COLORS } from '../../../consts/COLORS';

export const WindowStylded = styled.div`
  position: absolute;
  right: 17%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(0, -50%);
  width: 40px;
  height: 30px;
  border-radius: 40%;
  border: solid 1px ${COLORS.ITEM_COLOR};
  background-color: transparent;
  z-index: 3;
`;

export const AperturaStyled = styled.div`
  width: 22px;
  height: 18px;
  z-index: 2;
  background-color: ${COLORS.ITEM_COLOR};
  color: ${COLORS.DARK_ITEM_COLOR};
  overflow: hidden;
`;

export const Number = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  transform: translate(0, -4.5%);
  width: 22px;
  height: 18px;
  background-color: ${COLORS.ITEM_COLOR};
`;
