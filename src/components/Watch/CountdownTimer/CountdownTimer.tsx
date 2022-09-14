import React from 'react';
import { v4 as uuid } from 'uuid';
import { CountdownTimerStyled, InsideBorderStyled } from './CountdownTimer.styled';
import { PointWrapper } from './PointsWrapper/PointsWrapper';
import { POINTS } from './PointsWrapper/PointsWrapper.data';


export const CountdownTimer = () => (
    <CountdownTimerStyled>
        <InsideBorderStyled />
        {POINTS.map((props) => <PointWrapper key={uuid()} {...props} />)}
    </CountdownTimerStyled>
);
 