import { ValuesOf } from '../types/ValuesOf';
import { GetCurrentDateResult as CurrentDate } from './getCurrentDate';

export const HANDS_TYPE = {
  HOUR: 'hour',
  MINUTE: 'minute',
  SECOND: 'second',
} as const;

type WhichHand = ValuesOf<typeof HANDS_TYPE>;

export const getRotationFromDate = (currentDate: CurrentDate, whichHand: WhichHand): number => {
  if (whichHand === 'hour') {
    return Math.floor(
      ((currentDate.hour * 3600 + currentDate.minute * 60 + currentDate.second) / 86400) * 720,
    );
  }

  if (whichHand === 'minute') {
    return Math.floor(((currentDate.minute * 60 + currentDate.second) / 3600) * 360);
  }

  return Math.floor((currentDate.second / 60) * 360);
};
