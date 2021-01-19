import React from "react";

import {Container, Base, Item, Data, Action} from "./styles.js";

const List = ({children, ...props}) => <Container {...props}>{children}</Container>;

List.Base = ({children, ...props}) => <Base {...props}>{children}</Base>;

List.Item = ({children, ...props}) => <Item {...props}>{children}</Item>;

List.Data = ({children, ...props}) => <Data {...props}>{children}</Data>;

List.Action = ({children, ...props}) => <Action {...props}>{children}</Action>;

export default List;