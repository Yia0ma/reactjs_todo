import React from "react";

import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";
import MainContainer from "../containers/MainContainer";
import TodoContainer from "../containers/TodoContainer";

const Home = () => (
    <>
    <HeaderContainer/>
    <MainContainer>
        <TodoContainer/>
    </MainContainer>
    <FooterContainer/>
    </>
);

export default Home;