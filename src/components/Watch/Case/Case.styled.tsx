import styled from 'styled-components';
import { COLORS } from '../../../consts/COLORS';

export const CaseStyled = styled.div`
  position: absolute;

  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSideOfCase = styled.div`
  width: 25%;
  height: 92%;
  background-color: ${COLORS.CASE_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  margin: 4% 0 4% 2%;
`;

export const LeftTopBackground = styled.div`
  width: 0;
  height: 0;
  border-top: 140px solid ${COLORS.BACKGROUND_COLOR};
  border-right: 40px solid transparent;
  transform: translate(-1%, -1%);
`;

export const LeftBottomBackground = styled.div`
  width: 0;
  height: 0;
  border-bottom: 140px solid ${COLORS.BACKGROUND_COLOR};
  border-right: 40px solid transparent;
  transform: translate(-1%);
`;

export const RightSideOfCase = styled(LeftSideOfCase)`
  align-items: flex-end;
  margin: 0 2% 0 0;
`;

export const RightTopBackground = styled(LeftBottomBackground)`
  transform: rotate(180deg) translate(-1%, 1%);
`;
export const RightBottomBackground = styled(LeftTopBackground)`
  transform: rotate(180deg) translate(-1%);
`;

export const MiddlePartOfCase = styled.div`
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background-color: ${COLORS.CASE_COLOR};
`;

export const PlaceForCrown = styled.div`
  position: absolute;
  right: 0;
  width: 5%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  background-color: ${COLORS.HANDS_COLOR};
  border-right: solid 1px ${COLORS.HANDS_COLOR};
`;

export const PartStyled = styled.div`
  height: 35px;
  width: 35px;
  background-color: ${COLORS.CASE_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SecondPartStyled = styled(PartStyled)`
  flex-direction: column-reverse;
`;

export const TriangleBackgroundStyled = styled.div`
  width: 0;
  height: 0;
  border-top: 18px solid ${COLORS.BACKGROUND_COLOR};
  border-left: 35px solid transparent;
  transform: translate(1%, -1%);
`;

export const SecondTriangleBackgroundStyled = styled(TriangleBackgroundStyled)`
  border-top: none;
  border-bottom: 18px solid ${COLORS.BACKGROUND_COLOR};
  transform: translate(1%, 1%);
`;

export const SmallbackgroundTriangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 2px solid ${COLORS.BACKGROUND_COLOR};
  border-left: 11px solid transparent;
  align-self: flex-end;
`;

export const SecondSmallbackgroundTriangle = styled(SmallbackgroundTriangle)``;
