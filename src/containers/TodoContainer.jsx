import React from "react";

import {Form, List} from "../components";

const TodoContainer = () => {
    return (
        <>
            <Form>
                <Form.Base>
                <Form.Input
                    type="text"
                    placeholder="Eg. Read a book..."
                />
                <Form.Button>Add</Form.Button>
                </Form.Base>
            </Form>
            <List>
                <List.Base>
                    <List.Item>Wash dishes</List.Item>
                    <List.Item>Clean room</List.Item>
                </List.Base>
            </List>
        </>
    );
};

export default TodoContainer;
