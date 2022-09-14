import { COLORS } from '../../../../consts/COLORS';

const PROPERTIES = {
    TRINANGLE: {
        backgroundColor: 'transparent',
        marginTop: '6px',
        width: '0',
        height: '0',
        borderLeft: '15px solid transparent',
        borderRight: '15px solid transparent',
        borderTop: `15px solid ${COLORS.CASE_COLOR}`,
        content: null,
    },
    NUMERAL: {
        backgroundColor: 'transparent',
        marginTop: '0',
        width: '0', 
        height: '0',
        borderLeft: '0',
        borderRight: '0',
        borderTop: '0',
        content: '10',

    },
    SMALL: {
        backgroundColor: `${COLORS.CASE_COLOR}`,
        marginTop: '16px',
        width: '2px',
        height: '6px',
        borderLeft: '0',
        borderRight: '0',
        borderTop: '0',
        content: null,
    },
    BIG: {
        backgroundColor: `${COLORS.CASE_COLOR}`,
        marginTop: '6px',
        width: '6px',
        height: '18px',
        borderLeft: '0',
        borderRight: '0',
        borderTop: '0',
        content: null,
    },
} as const;

const INDEXES: { -readonly [Property in keyof typeof PROPERTIES]: number[] } = {
    TRINANGLE: [0], 
    NUMERAL: [10, 16, 18, 20, 22],
    SMALL: [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14],
    BIG: [5, 15, 17, 19, 21, 23],
};

const getElementKey = (index: number): keyof typeof PROPERTIES => (Object.entries(INDEXES)
    .find(([_, values]) => values.includes(index)) ?? ['TRIANGLE' as keyof typeof PROPERTIES])[0] as keyof typeof PROPERTIES;


export const POINTS = Array.from({ length: 24 }, (_, index) => {
    const key = getElementKey(index);

    console.log

    return (
        {
            ...PROPERTIES[key],
            rotation: `${index * (index > 15 ? 30 : 6)}deg`,
            ...(typeof PROPERTIES[key].content === 'string' ? { content: `${parseInt(PROPERTIES[key].content as string, 10) * (INDEXES[key].indexOf(index) + 1)}` } : {}),
        }
    )
});

export type PointProps = typeof POINTS[number]; 