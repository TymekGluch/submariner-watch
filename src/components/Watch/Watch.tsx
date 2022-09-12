import React from "react";
import { WatchStyled } from "./Watch.styled";
import { Case } from "./Case/Case";
import { Dial } from "./Dial/Dial";

export const Watch = () => (
    <WatchStyled>
        <Case />
        <Dial />
    </WatchStyled>
);