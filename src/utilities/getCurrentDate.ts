type CurrentDateKeys = 'day' | 'hour' | 'minute' | 'second';

export type GetCurrentDateResult = Record<CurrentDateKeys, number>;

export const getCurrentDate = (date: Date): GetCurrentDateResult => {
  return {
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
};
