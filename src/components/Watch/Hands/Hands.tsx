import React from 'react';
import {
  CircleOfHourStyled,
  CircleStyled,
  ElementStyled,
  HourStyled,
  InsideItemStyled,
  InsideTringleStyled,
  MinuteStyled,
  ReactangleOfHourStyled,
  SecondStyled,
  TriangleOfHourStyled,
  secondaryInsideItemStyled,
  thirdInsideItemStyled,
} from './Hands.styled';

export const Hands = () => (
  <>
    <CircleStyled />

    <HourStyled>
      <TriangleOfHourStyled>
        <InsideTringleStyled />
      </TriangleOfHourStyled>

      <CircleOfHourStyled>
        <InsideItemStyled />
      </CircleOfHourStyled>

      <ReactangleOfHourStyled />
    </HourStyled>

    <MinuteStyled>
      <ElementStyled />
    </MinuteStyled>

    <SecondStyled />
  </>
);
