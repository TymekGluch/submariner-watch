import React, { FC, useEffect, useState } from 'react';
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
import { getRotationFromDate, HANDS_TYPE } from '../../../utilities/getRotationFromDate';
import { getCurrentDate } from '../../../utilities/getCurrentDate';

export const Hands: FC = () => {
  const [hourHandsRotation, setHourHandsRotation] = useState<number>(0);
  const [minuteHandsRotation, setMinuteHandsRotation] = useState<number>(0);
  const [secondHandsRotation, setSecondHandsRotation] = useState<number>(0);

  useEffect(() => {
    window.onbeforeunload = function () {
      const x = new Date();

      setSecondHandsRotation(getRotationFromDate(getCurrentDate(x), HANDS_TYPE.SECOND));
      setMinuteHandsRotation(getRotationFromDate(getCurrentDate(x), HANDS_TYPE.MINUTE));
      setHourHandsRotation(getRotationFromDate(getCurrentDate(x), HANDS_TYPE.HOUR));
      return true;
    };

    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  return (
    <>
      <HourStyled rotation={hourHandsRotation}>
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

      <MinuteStyled rotation={minuteHandsRotation}>
        <ElementStyled />
      </MinuteStyled>

      <SecondStyled rotation={secondHandsRotation} />

      <CircleStyled />
    </>
  );
};
