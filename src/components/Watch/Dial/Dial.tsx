import React from 'react';
import { DialStyled } from './Dial.styled';
import { Points } from './Points/Points';
import { POINTS } from './Points/Points.data';
import { v4 as uuid } from 'uuid';

export const Dial = () => (
  <DialStyled>
    {POINTS.map((props) => (
      <Points key={uuid()} {...props} />
    ))}
  </DialStyled>
);
