import React from 'react';
import { WatchStyled } from './Watch.styled';
import { Case } from './Case/Case';
import { Dial } from './Dial/Dial';
import { RotatingBezel } from './RotatingBezel/RotatingBezel';
import { Aperture } from './Aperture/Aperture';
import { Hands } from './Hands/Hands';
import { Crown } from './Crown/Crown';
import { Bracelet } from './Bracelet/Bracelet';

export const Watch = () => (
  <WatchStyled>
    <Bracelet />

    <Case />

    <Dial />

    <RotatingBezel />

    <Aperture />

    <Hands />

    <Crown />
  </WatchStyled>
);
