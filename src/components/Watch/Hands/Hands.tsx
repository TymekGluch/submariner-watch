import React, { FC, useContext, useMemo } from 'react';
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
import { WatchContext } from '../../../contexts/WatchContext';

export const Hands: FC = () => {
  const [store] = useContext(WatchContext);

  const rotations = useMemo(
    () => ({
      secondHands: getRotationFromDate(getCurrentDate(store.date), HANDS_TYPE.SECOND),
      minuteHands: getRotationFromDate(getCurrentDate(store.date), HANDS_TYPE.MINUTE),
      hourHands: getRotationFromDate(getCurrentDate(store.date), HANDS_TYPE.HOUR),
    }),
    [store.date],
  );

  return (
    <>
      <HourStyled rotation={rotations.hourHands}>
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

      <MinuteStyled rotation={rotations.minuteHands}>
        <ElementStyled />
      </MinuteStyled>

      <SecondStyled rotation={rotations.secondHands} />

      <CircleStyled />
    </>
  );
};
