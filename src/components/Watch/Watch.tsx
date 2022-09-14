import React from 'react';
import { WatchStyled } from './Watch.styled';
import { Case } from './Case/Case';
import { Dial } from './Dial/Dial';
import { CountdownTimer } from './CountdownTimer/CountdownTimer';

export const Watch = () => (
    <WatchStyled>
        <Case />
        <Dial />
        <CountdownTimer />
    </WatchStyled>
);  