import React, {useState} from "react";

import {Main} from "../components";

const MainContainer = ({children}) => (
        <Main>
            <Main.Title>Any plans for today?</Main.Title>
            {children}  
        </Main>
);

export default MainContainer;