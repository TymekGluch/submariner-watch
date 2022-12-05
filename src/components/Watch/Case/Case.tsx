import React from 'react';
import {
  CaseStyled,
  LeftSideOfCase,
  RightSideOfCase,
  PlaceForCrown,
  PartStyled,
  SecondPartStyled,
  MiddlePartOfCase,
  LeftTopBackground,
  LeftBottomBackground,
  RightTopBackground,
  RightBottomBackground,
  SecondTriangleBackgroundStyled,
  TriangleBackgroundStyled,
} from './Case.styled';

export const Case = () => (
  <CaseStyled>
    <LeftSideOfCase>
      <LeftTopBackground />

      <LeftBottomBackground />
    </LeftSideOfCase>

    <RightSideOfCase>
      <RightTopBackground />

      <RightBottomBackground />
    </RightSideOfCase>

    <MiddlePartOfCase />

    <PlaceForCrown>
      <PartStyled>
        <TriangleBackgroundStyled />
      </PartStyled>

      <SecondPartStyled>
        <SecondTriangleBackgroundStyled />
      </SecondPartStyled>
    </PlaceForCrown>
  </CaseStyled>
);
