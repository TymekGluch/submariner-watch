import styled from 'styled-components';
import { COLORS } from '../../../consts/COLORS';

export const BreceletStyled = styled.div`
  position: absolute;
  transform: translate(-50%);
  left: 50%;
  width: 110px;
  height: 400px;
  background-color: transparent;
  border-top-left-radius: 10% 25%;
  border-top-right-radius: 10% 25%;
  border-bottom-left-radius: 10% 25%;
  border-bottom-right-radius: 10% 25%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SideOfBraceletStyled = styled.div<{ rotation: number }>`
  background-color: transparent;
  width: 100%;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  transform: rotate(${({ rotation = 0 }) => rotation}deg);
`;

export const PartOfBraceletStyled = styled.div<{
  translation: number;
  width: number;
  height?: number;
  shadowHeight: number;
}>`
  width: ${({ width = 0 }) => width}%;
  height: ${({ height = 33.3333 }) => height}%;
  background-color: ${COLORS.CASE_COLOR};
  border-bottom: solid 1px ${COLORS.BACKGROUND_COLOR};
  border-left: solid 0.05px ${COLORS.BACKGROUND_COLOR};
  border-right: solid 0.05px ${COLORS.BACKGROUND_COLOR};
  box-shadow: inset 0 ${({ shadowHeight = 5 }) => shadowHeight}px ${COLORS.HANDS_COLOR};
  display: flex;
  transform: translateY(${({ translation = 0 }) => translation}%);
`;
