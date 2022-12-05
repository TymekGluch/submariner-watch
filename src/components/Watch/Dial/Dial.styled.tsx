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
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const HeaderStyled = styled.header`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
`;

export const SVGStyled = styled.svg`
  margin-top: 36px;
  width: 60px;
  height: 30px;
`;

export const PathStyled = styled.path`
  fill: ${COLORS.ITEM_COLOR};
  transform: translate(-84.79px, -161.01px);
`;

export const TextStyled = styled.p`
  font-size: 0.45rem;
  font-weight: 600;
  color: ${COLORS.ITEM_COLOR};
`;

export const SectionStyled = styled(HeaderStyled)`
  bottom: 2.5rem;
`;

export const SectionHeadingStyled = styled.h2`
  color: ${COLORS.ITEM_COLOR};
  font-size: 6px;
  font-weight: 900;
`;
export const SectionTextStyled = styled.p`
  color: ${COLORS.ITEM_COLOR};
  font-size: 5px;
  font-weight: 900;
`;

export const TriangleBottomStyled = styled.div`
  position: absolute;
  margin-top: 5px;
  width: 0;
  height: 0;
  background-color: transparent;
  border-top: solid 28px ${COLORS.CASE_COLOR};
  border-left: solid 11px transparent;
  border-right: solid 11px transparent;
  z-index: -1;
`;
