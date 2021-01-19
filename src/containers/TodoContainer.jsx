import React from "react";

import {Form, List} from "../components";
import useTodo from "../hooks/useTodo";

const TodoContainer = () => {
    const [input, items, handleInput, handleSubmit, handleClick, isButtonDisabled, handleDelete] = useTodo("", []);

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
                <Form.Button disabled={isButtonDisabled}>Add</Form.Button>
                </Form.Base>
            </Form>
            <List>
                <List.Base>
                    {items.map(item => (
                        <List.Item key={item.id}>
                            <List.Data isCompleted={item.isCompleted} onClick={() => handleClick(item.id)}>{item.data}</List.Data>
                            <List.Action onClick={() => handleDelete(item.id)}>Delete</List.Action>
                        </List.Item>
                    ))}
                </List.Base>
            </List>
        </>
    );
};

export default TodoContainer;
