import styled from 'styled-components';
import { COLORS } from '../../../consts/COLORS';

export const DialStyled = styled.div`
  position: absolute;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: ${COLORS.DIAL_COLOR};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
