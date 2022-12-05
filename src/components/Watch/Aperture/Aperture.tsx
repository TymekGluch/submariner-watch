import React, { useContext, useMemo } from 'react';
import { WatchContext } from '../../../contexts/WatchContext';
import { AperturaStyled, Number, WindowStylded } from './Aperture.styled';

export const Aperture = () => {
  const [store] = useContext(WatchContext);

  const resolvedDay = useMemo(() => store.date.getDate(), [store.date]);

  return (
    <WindowStylded>
      <AperturaStyled>
        <Number>{resolvedDay}</Number>
      </AperturaStyled>
    </WindowStylded>
  );
};
