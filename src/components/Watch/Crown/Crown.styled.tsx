import styled from 'styled-components';
import { COLORS } from '../../../consts/COLORS';

export const CrownWrapperStyled = styled.button`
  position: absolute;
  z-index: 2;
  top: 50%;
  right: 0;
  transform: translate(100%, -50%) translateX(0);
  border: none;
  background-color: rgba(255, 255, 255, 0);
  width: 1.7rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

export const CrownStyled = styled.div`
  background-color: ${COLORS.HANDS_COLOR};
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CrowPointWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;

export const CrownPointStyled = styled.div`
  background-color: transparent;
  height: 0;
  width: 100%;
  border-bottom: 0.24rem solid ${COLORS.CASE_COLOR};
  border-left: 0.15rem solid transparent;
  border-right: 0.15rem solid transparent;
  transform: rotate(180deg);
`;

export const ReversedCrownPointStyled = styled(CrownPointStyled)`
  transform: rotate(0) translateY(-1px);
`;

export const OutsideCrownStyled = styled(CrownStyled)`
  width: 0;
  height: 100%;
  background-color: transparent;
  border-top: 0.4rem solid transparent;
  border-bottom: 0.4rem solid transparent;
  border-left: 0.4rem solid ${COLORS.CASE_COLOR};
  opacity: 95%;
`;

export const CrownPinStyled = styled.div`
  position: absolute;
  width: 1.6rem;
  height: 0.9rem;
  background-color: ${COLORS.CASE_COLOR};
  opacity: 95%;
  z-index: -1;
  right: 0;
  transform: translate(100%);
`;
