import React, { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { InsideBorderStyled, RotatingBezelStyled } from './RotatingBezel.styled';
import { PointWrapper } from './PointsWrapper/PointsWrapper';
import { POINTS } from './PointsWrapper/PointsWrapper.data';

export const RotatingBezel: FC = () => {
  const isMouseDownRef = useRef<boolean>(false);
  const bandindRectRef = useRef<DOMRect | null>(null);
  const centersRef = useRef<number[]>([]);
  const circleRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState<number>(0);

  const handleMouseDown = (): void => {
    isMouseDownRef.current = true;
  };

  const handleMouseUp = (): void => {
    isMouseDownRef.current = false;
  };

  const handleMouseMove = ({ clientX, clientY }: MouseEvent<HTMLDivElement>): void => {
    if (!isMouseDownRef.current || !bandindRectRef.current) {
      return;
    }

    const { top, left } = bandindRectRef.current as DOMRect;
    const [horizontal, vertical] = centersRef.current;
    const centerX = top + horizontal - window.pageXOffset;
    const centerY = left + vertical - window.pageYOffset;
    const radian = Math.atan2(clientX - centerX, clientY - centerY);
    const degrees = radian * (180 / Math.PI) * -1 + 180;

    setRotation(degrees);
  };

  useEffect(() => {
    if (circleRef.current) {
      const origin = window.getComputedStyle(circleRef.current).transformOrigin;

      if (typeof origin === 'string') {
        bandindRectRef.current = circleRef.current.getBoundingClientRect();
        centersRef.current = origin.split(' ').map((current) => parseInt(current, 10));
      }
    }
  }, []);

  return (
    <RotatingBezelStyled
      ref={circleRef}
      rotation={rotation}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <InsideBorderStyled />

      {POINTS.map((props) => (
        <PointWrapper key={uuid()} {...props} />
      ))}
    </RotatingBezelStyled>
  );
};
