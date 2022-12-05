import React from 'react';
import {
  DialStyled,
  HeaderStyled,
  PathStyled,
  SectionHeadingStyled,
  SectionStyled,
  SectionTextStyled,
  SVGStyled,
  TextStyled,
  TriangleBottomStyled,
} from './Dial.styled';
import { Points } from './Points/Points';
import { POINTS } from './Points/Points.data';
import { v4 as uuid } from 'uuid';
import { PATHS } from './Dial.data';

export const Dial = () => (
  <DialStyled>
    {POINTS.map((props) => (
      <Points key={uuid()} {...props} />
    ))}

    <HeaderStyled>
      <SVGStyled xmlns='http://www.w3.org/2000/svg' viewBox='0 0 342.41 189.98'>
        {PATHS.map((path) => (
          <PathStyled key={uuid()} d={path} />
        ))}
      </SVGStyled>
      <TextStyled>OYSTER PERPETURAL</TextStyled>
    </HeaderStyled>

    <SectionStyled>
      <SectionHeadingStyled>Submariner</SectionHeadingStyled>
      <SectionTextStyled>
        1000<em>ft</em> = 300m
      </SectionTextStyled>
      <SectionTextStyled>Superlative Chronometer</SectionTextStyled>
      <SectionTextStyled>Officially Certified</SectionTextStyled>
    </SectionStyled>

    <TriangleBottomStyled />
  </DialStyled>
);
