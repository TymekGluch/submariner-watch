import { COLORS } from '../../../../consts/COLORS';

const PROPERTIES = {
  SMALL: {
    width: '1px',
    height: '4px',
    backgroundColor: `${COLORS.CASE_COLOR}`,
    marginTop: '0',
    border: 'none',
    borderRadius: '0',
    borderLeft: '0',
    borderRight: '0',
    borderTop: '0',
  },
  BIG: {
    width: '10px',
    height: '28px',
    backgroundColor: `${COLORS.ITEM_COLOR}`,
    marginTop: '5px',
    border: `solid 2px ${COLORS.CASE_COLOR}`,
    borderRadius: '0',
    borderLeft: '0',
    borderRight: '0',
    borderTop: '0',
  },
  CIRCLE: {
    width: '18px',
    height: '18px',
    backgroundColor: `${COLORS.ITEM_COLOR}`,
    marginTop: '5px',
    border: `solid 2px ${COLORS.CASE_COLOR}`,
    borderRadius: '50%',
    borderLeft: '0',
    borderRight: '0',
    borderTop: '0',
  },
  TRIANGLE: {
    width: '0',
    height: '0',
    backgroundColor: 'transparent',
    marginTop: '7.4px',
    borderRadius: '0',
    border: '',
    borderLeft: '7px solid transparent',
    borderRight: '7px solid transparent',
    borderTop: `19.6px solid ${COLORS.ITEM_COLOR}`,
  },
  NULL: {
    width: '0',
    height: '0',
    backgroundColor: 'transparent',
    marginTop: '0',
    border: 'none',
    borderRadius: '0',
    borderLeft: '0',
    borderRight: '0',
    borderTop: '0',
  },
} as const;

const INDEXES: { -readonly [Property in keyof typeof PROPERTIES]: number[] } = {
  TRIANGLE: [60],
  SMALL: [...Array.from({ length: 60 }, (_, index) => index)],
  BIG: [66, 69],
  CIRCLE: [61, 62, 64, 65, 67, 68, 70, 71],
  NULL: [63],
};

const getElementKey = (index: number): keyof typeof PROPERTIES =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (Object.entries(INDEXES).find(([_, values]) => values.includes(index)) ?? [
    'TRIANGLE' as keyof typeof PROPERTIES,
  ])[0] as keyof typeof PROPERTIES;

export const POINTS = Array.from({ length: 72 }, (_, index) => {
  const key = getElementKey(index);

  return {
    ...PROPERTIES[key],
    rotation: `${index * (index > 59 ? 30 : 6)}deg`,
  };
});

export type PointProps = typeof POINTS[number];
