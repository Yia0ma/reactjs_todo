import React from "react";

import {Container, Logo} from "./styles";

const Header = ({children, ...props}) => <Container {...props}>{children}</Container>;

Header.Logo = ({...props}) => <Logo {...props}>Y</Logo>;

export default Header;