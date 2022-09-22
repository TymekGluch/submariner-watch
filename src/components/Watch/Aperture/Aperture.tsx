import React, { useEffect, useState } from 'react';
import { AperturaStyled, Number, WindowStylded } from './Aperture.styled';

export const Aperture = () => {
  const [aperatureState, setAperatureState] = useState(3);

  useEffect(() => {
    const date = new Date();

    setInterval(() => {
      setAperatureState(date.getDate());
    }, 1000);
  }, []);

  return (
    <WindowStylded>
      <AperturaStyled>
        <Number>{aperatureState}</Number>
      </AperturaStyled>
    </WindowStylded>
  );
};
