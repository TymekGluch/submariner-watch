import React from 'react';
import { WatchStyled } from './Watch.styled';
import { Case } from './Case/Case';
import { Dial } from './Dial/Dial';
import { RotatingBezel } from './RotatingBezel/RotatingBezel';
import { Aperture } from './Aperture/Aperture';
import { Hands } from './Hands/Hands';

export const Watch = () => (
  <WatchStyled>
    <Case />

    <Dial />

    <RotatingBezel />

    <Aperture />

    <Hands />
  </WatchStyled>
);
