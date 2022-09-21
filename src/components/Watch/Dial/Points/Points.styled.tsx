import styled from 'styled-components';
import { PointProps } from './Points.data';

type PointWrapperStyledProps = {
  rotation: PointProps['rotation'];
};

export const PointsWrapperStyled = styled.div<PointWrapperStyledProps>`
  position: absolute;
  width: fit-content;
  height: 85px;
  transform: rotate(${(props) => props.rotation});
  transform-origin: center bottom;
`;

export const PointsStyled = styled.div<Omit<PointProps, 'rotation'>>`
  margin-top: ${(props) => props.marginTop};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  border-top: ${(props) => props.borderTop};
  border-left: ${(props) => props.borderLeft};
  border-right: ${(props) => props.borderRight};
  border: ${(props) => props.border};
`;
