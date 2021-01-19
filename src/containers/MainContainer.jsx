import React, {useState} from "react";

import {Main} from "../components";

const MainContainer = ({children}) => (
        <Main>
            <Main.Title>Task Manager</Main.Title>
            {children}  
        </Main>
);

export default MainContainer;