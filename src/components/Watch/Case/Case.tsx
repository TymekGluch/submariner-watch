import React from 'react';
import { CaseStyled, LeftSideOfCase, RightSideOfCase, PlaceForCrown, PartStyled, SecondPartStyled, MiddlePartOfCase } from './Case.styled';

export const Case = () => (
    <CaseStyled>
        <LeftSideOfCase />
        <RightSideOfCase />
        <MiddlePartOfCase />
        <PlaceForCrown>
            <PartStyled />
            <SecondPartStyled />
        </PlaceForCrown>
    </CaseStyled>
); 