import React, { FC, Fragment } from 'react';
import {
  CrownPinStyled,
  CrownPointStyled,
  CrownStyled,
  CrownWrapperStyled,
  CrowPointWrapperStyled,
  OutsideCrownStyled,
  ReversedCrownPointStyled,
} from './Crown.styled';

import { v4 as uuid } from 'uuid';

export const Crown: FC = () => {
  return (
    <>
      <CrownWrapperStyled>
        <CrownStyled>
          <CrowPointWrapperStyled>
            {Array.from({ length: 8 }).map(() => (
              <Fragment key={uuid()}>
                <CrownPointStyled />

                <ReversedCrownPointStyled />
              </Fragment>
            ))}
            ;
          </CrowPointWrapperStyled>
        </CrownStyled>
        <OutsideCrownStyled />
      </CrownWrapperStyled>

      <CrownPinStyled />
    </>
  );
};
