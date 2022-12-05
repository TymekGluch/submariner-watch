import styled from 'styled-components';
import { COLORS } from '../../../consts/COLORS';

export const RotatingBezelStyled = styled.div<{ rotation: number }>`
  position: absolute;
  width: 240px;
  height: 240px;
  background-color: ${COLORS.DIAL_COLOR};
  border: solid 6px ${COLORS.CASE_COLOR};
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(${(props) => props.rotation}deg);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InsideBorderStyled = styled.div`
  width: 176px;
  height: 176px;
  border-radius: 50%;
  position: absolute;
  background-color: ${COLORS.CASE_COLOR};
`;

export const BackgroundSemicirclesContainerStyled = styled.div<{ degrees: number }>`
  position: absolute;
  z-index: 10000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: transparent;
  width: 6px;
  height: 50%;
  top: 0;
  transform-origin: center bottom;
  transform: rotate(${(props) => props.degrees}deg);
`;

export const BackgroundSemicirclesStyled = styled.div`
  transform: translateY(-150%) translateX(1%);
  display: block;
  width: 3px;
  height: 4px;
  border-bottom-left-radius: 100%;
  background-color: ${COLORS.HANDS_COLOR};
  opacity: 0.9;
`;

export const SecondBackgroundSemicirclesStyled = styled(BackgroundSemicirclesStyled)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 100%;
  transform: translateY(-150%) translateX(-1%);
`;
