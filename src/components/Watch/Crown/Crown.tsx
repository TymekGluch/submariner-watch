import React from 'react';
import {
  CrownPinStyled,
  CrownPointStyled,
  CrownStyled,
  CrownWrapperStyled,
  OutsideCrownStyled,
  ReversedCrownPointStyled,
} from './Crown.styled';

export const Crown = () => {
  return (
    <>
      <CrownWrapperStyled>
        <CrownStyled>
            {Array.from({ length: 6 }).map(() => 
                <>
                    <CrownPointStyled />

                    <ReversedCrownPointStyled />
                </>
            )};
        </CrownStyled>
        <OutsideCrownStyled />
      </CrownWrapperStyled>

      <CrownPinStyled />
    </>
  );
};
