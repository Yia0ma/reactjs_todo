import React from "react";

import {Form, List} from "../components";
import useTodo from "../hooks/useTodo";

const TodoContainer = () => {
    const [input, items, handleInput, handleSubmit, handleClick] = useTodo("", []);

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
                    {items.map(item => 
                        <List.Item 
                            key={item.id} 
                            onClick={() => handleClick(item.id)}
                            isCompleted={item.isCompleted}
                        >
                        {item.data}
                        </List.Item>
                    )}
                </List.Base>
            </List>
        </>
    );
};

export default TodoContainer;
