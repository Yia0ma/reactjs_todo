import React, {useState} from "react";

import {Main, Form, List} from "../components";

const MainContainer = () => {

    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();

        const todo = {
            id: todos.length,
            body: text,
            isCompleted: false
        };

        const newTodos = [...todos, todo];

        setTodos(newTodos);

        setText("");
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleClick = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) todo.isCompleted = !todo.isCompleted;
            return todo;
        });

        setTodos(updatedTodos);
    }

    const isButtonDisable = text.length < 3;

    return (
        <Main>
            <Main.Title>What do you want to do today?</Main.Title>
            <Form>
                <Form.Base onSubmit={handleSubmit}>
                    <Form.Input
                        type="text"
                        value={text} 
                        onChange={handleChange} 
                        placeholder="Eg. Wash dishes..."
                    />
                    <Form.Button disabled={isButtonDisable} type="submit">Add</Form.Button>
                </Form.Base>
            </Form>
            <List>
                <List.Base>
                    {todos.map(todo => <List.Item 
                                            isCompleted={todo.isCompleted}
                                            key={todo.id}
                                            onClick={() => handleClick(todo.id)}
                                        >
                                        {todo.body}
                                        </List.Item>)}
                </List.Base>
            </List>
        </Main>
    );
};

export default MainContainer;