import React from "react";

import {Container, Text} from "./styles.js";

const Footer = ({children, ...props}) => <Container {...props}>{children}</Container>;

Footer.Text = ({children, ...props}) => <Text {...props}>{children}</Text>;

export default Footer;