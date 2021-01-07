import React from "react";

import {Container, Base, Input, Button} from "./styles";

const Form = ({children, ...props}) => <Container {...props}>{children}</Container>;

Form.Base = ({children, ...props}) => <Base {...props}>{children}</Base>;

Form.Input = ({...props}) => <Input {...props}/>;

Form.Button = ({children, ...props}) => <Button {...props}>{children}</Button>;

export default Form;