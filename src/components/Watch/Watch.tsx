import React from 'react';
import { WatchStyled } from './Watch.styled';
import { Case } from './Case/Case';
import { Dial } from './Dial/Dial';
import { RotatingBezel } from './RotatingBezel/RotatingBezel';


export const Watch = () => (
    <WatchStyled>
        <Case />
        
        <Dial />

        <RotatingBezel />
    </WatchStyled>
);  