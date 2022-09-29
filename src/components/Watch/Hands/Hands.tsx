import React from 'react';
import {
  CircleInsideElementStyled,
  CircleOfHourStyled,
  CircleStyled,
  ElementStyled,
  HourStyled,
  InsideTringleStyled,
  MinuteStyled,
  ReactangleOfHourStyled,
  SecondStyled,
  TriangleOfHourStyled,
} from './Hands.styled';

import { v4 as uuid } from 'uuid';

export const Hands = () => (
  <>
    <HourStyled>
      <TriangleOfHourStyled>
        <InsideTringleStyled />
      </TriangleOfHourStyled>

      <CircleOfHourStyled>
        {Array.from({ length: 3 }).map(() => (
          <CircleInsideElementStyled key={uuid()} />
        ))}
      </CircleOfHourStyled>

      <ReactangleOfHourStyled />
    </HourStyled>

    <MinuteStyled>
      <ElementStyled />
    </MinuteStyled>

    <SecondStyled />

    <CircleStyled />
  </>
);
