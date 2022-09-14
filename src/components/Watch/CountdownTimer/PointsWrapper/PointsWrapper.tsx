import React from 'react';
import { PointProps } from './PointsWrapper.data';
import { PointStyled, PointWrapperStyled } from './PointWrapper.styled';

export const PointWrapper = ({ rotation, ...props }: PointProps) => (
  <PointWrapperStyled rotation={rotation}>
    <PointStyled {...props}></PointStyled>
  </PointWrapperStyled>
);
