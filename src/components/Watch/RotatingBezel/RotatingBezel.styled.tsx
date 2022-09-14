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
  background-color: ${COLORS.CASE_COLOR};
`;
