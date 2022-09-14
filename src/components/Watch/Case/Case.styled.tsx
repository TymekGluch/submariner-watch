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
  width: 20%;
  height: 100%;
  border-radius: 50% 0 0 50%;
  background-color: ${COLORS.CASE_COLOR};
`;

export const RightSideOfCase = styled(LeftSideOfCase)`
  transform: rotate(180deg);
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
  right: -11%;
  width: 12%;
  height: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PartStyled = styled.div`
  width: 100%;
  height: 27%;
  background-color: ${COLORS.CASE_COLOR};
  border-radius: 0 50% 10% 0;
`;

export const SecondPartStyled = styled(PartStyled)`
  border-radius: 0 10% 50% 0;
`;
