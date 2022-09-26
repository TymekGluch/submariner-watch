import styled from 'styled-components';
import { COLORS } from '../../../consts/COLORS';

export const CircleStyled = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${COLORS.HANDS_COLOR};
  z-index: 3;
`;

export const Hands = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%);
  transform-origin: bottom;
  z-index: 4;
`;

export const HourStyled = styled(Hands)``;

export const MinuteStyled = styled(Hands)``;

export const SecondStyled = styled(Hands)`
  width: 1.5px;
  height: 80px;
  background-color: ${COLORS.HANDS_COLOR};
  transform: translate(-50%) rotate(10deg);
`;
