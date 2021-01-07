import React from "react";

import {Container, Logo} from "./styles";

const Header = ({children, ...props}) => <Container {...props}>{children}</Container>;

Header.Logo = ({children, ...props}) => <Logo {...props}>{children}</Logo>;

export default Header;