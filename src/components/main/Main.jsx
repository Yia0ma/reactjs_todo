import React from "react";

import {Container, Title} from "./styles";

const Main = ({children, ...props}) => <Container {...props}>{children}</Container>;

Main.Title = ({children, ...props}) => <Title {...props}>{children}</Title>;

export default Main;