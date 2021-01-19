import React, {useState} from "react";

import {Form, List} from "../components";
import useForm from "../hooks/useForm";

const TodoContainer = () => {
    const [input, handleInput, handleSubmit] = useForm("");

    return (
        <>
            <Form>
                <Form.Base onSubmit={handleSubmit}>
                <Form.Input
                    type="text"
                    placeholder="Eg. Read a book..."
                    value={input}
                    onChange={handleInput}
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
