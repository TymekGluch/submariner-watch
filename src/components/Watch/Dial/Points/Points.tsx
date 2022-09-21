import React from 'react';
import { PointProps } from './Points.data';
import { PointsStyled, PointsWrapperStyled } from './Points.styled';

export const Points = ({ rotation, ...props }: PointProps) => (
  <PointsWrapperStyled rotation={rotation}>
    <PointsStyled {...props} />
  </PointsWrapperStyled>
);
