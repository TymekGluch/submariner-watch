import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';
import { BreceletStyled, PartOfBraceletStyled, SideOfBraceletStyled } from './Bracelet.styled';

export const Bracelet: FC = () => (
  <BreceletStyled>
    {Array.from({ length: 2 }, (_, index) => {
      return (
        <SideOfBraceletStyled key={uuid()} rotation={index === 1 ? 180 : 0}>
          {Array.from({ length: 9 }, (_, index) => {
            const getHeightOfBraceletParts = (index: number): number => {
              if ([2, 8].includes(index)) return 38;
              else if ([1, 4, 7].includes(index)) return 33;
              else if ([0, 6].includes(index)) return 29;
              else return 33.333;
            };

            return (
              <PartOfBraceletStyled
                key={uuid()}
                translation={[3, 4, 5].includes(index) ? -45 : 0}
                width={[3, 4, 5].includes(index) ? 38 : 31}
                height={getHeightOfBraceletParts(index)}
                shadowHeight={index === 3 ? 18 : 5}
              />
            );
          })}
        </SideOfBraceletStyled>
      );
    })}
  </BreceletStyled>
);
