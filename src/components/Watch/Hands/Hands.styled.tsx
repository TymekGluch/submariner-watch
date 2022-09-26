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

export const MinuteStyled = styled(Hands)`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 0.5rem;
  height: 62px;
  background-color: ${COLORS.ITEM_COLOR};
  border: solid 2px ${COLORS.HANDS_COLOR};
  transform: translate(-50%, -8px) rotate(0deg);

  &::before {
    content: '';
    border-top: 10px solid ${COLORS.HANDS_COLOR};
    border-left: 0.25rem solid transparent;
    border-right: 0.25rem solid transparent;
    display: flex;
    background: transparent;
    width: 0;
    height: 0;
    transform: translateY(-120%) rotate(180deg);
  }

  &::after {
    content: '';
    border-top: 10px solid ${COLORS.HANDS_COLOR};
    border-left: 0.25rem solid transparent;
    border-right: 0.25rem solid transparent;
    display: flex;
    background: transparent;
    width: 0;
    height: 0;
    justify-self: flex-end;
    transform: translateY(480%);
  }
`;

export const SecondStyled = styled(Hands)`
  width: 1.5px;
  height: 80px;
  background-color: ${COLORS.HANDS_COLOR};
  transform: translate(-50%) rotate(70deg);
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    min-width: 0.7rem;
    max-width: 0.7rem;
    height: 0.7rem;
    background-color: ${COLORS.ITEM_COLOR};
    border: solid 2px ${COLORS.HANDS_COLOR};
    border-radius: 50%;
    display: flex;
  }
`;
