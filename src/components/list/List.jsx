import React from "react";

import {Container, Base, Item} from "./styles.js";

const List = ({children, ...props}) => <Container {...props}>{children}</Container>;

List.Base = ({children, ...props}) => <Base {...props}>{children}</Base>;

List.Item = ({children, ...props}) => <Item {...props}>{children}</Item>;

export default List;