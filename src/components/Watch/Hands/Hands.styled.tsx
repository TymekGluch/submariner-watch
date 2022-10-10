import styled from 'styled-components';
import { COLORS } from '../../../consts/COLORS';

export const CircleStyled = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: ${COLORS.HANDS_COLOR};
  z-index: 4;
`;

export const Hands = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%);
  transform-origin: bottom;
  z-index: 4;
`;

export const HourStyled = styled(Hands)<{ rotation: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  transform: translate(-50%) rotate(${(props) => props.rotation}deg);
`;

export const TriangleOfHourStyled = styled.div`
  border-top: 10px solid ${COLORS.HANDS_COLOR};
  border-left: 0.25rem solid transparent;
  border-right: 0.25rem solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 0;
  height: 0;
  transform: translate(0, 2px) rotate(180deg);
`;

export const InsideTringleStyled = styled.div`
  border-top: 10px solid ${COLORS.ITEM_COLOR};
  border-left: 0.25rem solid transparent;
  border-right: 0.25rem solid transparent;
  display: flex;
  background: transparent;
  width: 0;
  height: 0;
  transform: translate(0, -70%) scale(0.5);
`;

export const CircleOfHourStyled = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: flex-start;
  width: 1.3rem;
  height: 1.3rem;
  background-color: ${COLORS.ITEM_COLOR};
  border-radius: 50%;
  border: solid 2px ${COLORS.HANDS_COLOR};
  transform: translate(0, 1px);
`;

export const CircleInsideElementStyled = styled.div`
  ${Array.from(
    { length: 3 },
    (_, index) => `
  &:nth-child(${index + 1}) {
    transform: translate(-50%, 60%) rotate(${index * 120 + 60}deg);
  }
  `,
  ).join('')}
  width: 2px;
  height: 0.624rem;
  background-color: ${COLORS.HANDS_COLOR};
  transform-origin: center bottom;
  position: absolute;
  left: 50%;
  top: -50%;
`;

export const ReactangleOfHourStyled = styled.div`
  width: 0.4rem;
  height: 1.45rem;
  border: solid 2px ${COLORS.HANDS_COLOR};
  background-color: ${COLORS.ITEM_COLOR};
`;

export const MinuteStyled = styled(Hands)<{ rotation: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  height: 80px;
  transform: translate(-50%) rotate(${(props) => props.rotation}deg);
`;

export const ElementStyled = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 0.5rem;
  height: 62px;
  background-color: ${COLORS.ITEM_COLOR};
  border: solid 2px ${COLORS.HANDS_COLOR};

  &::before {
    content: '';
    border-top: 10px solid ${COLORS.HANDS_COLOR};
    border-left: 0.25rem solid transparent;
    border-right: 0.25rem solid transparent;
    display: flex;
    background: transparent;
    width: 0;
    height: 0;
    transform: translate(0, -120%) rotate(180deg);
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
    transform: translate(0, 500%);
  }
`;

export const SecondStyled = styled(Hands)<{ rotation: number }>`
  width: 1.5px;
  height: 80px;
  background-color: ${COLORS.HANDS_COLOR};
  transform: translate(-50%) rotate(${(props) => props.rotation}deg);
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
