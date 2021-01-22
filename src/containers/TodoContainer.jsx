import React from "react";
import { AiOutlineSend, AiOutlineCloseCircle } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";

import {Form, List} from "../components";
import useTodo from "../hooks/useTodo";

const TodoContainer = () => {
    const dummyData = [
        {id: 0, data: "Wash dishes", isCompleted: true},
        {id: 1, data: "Study", isCompleted: false},
        {id: 2, data: "Workout", isCompleted: false}
    ];
    const [
        input, 
        items, 
        handleInput, 
        handleSubmit, 
        handleClick, 
        isButtonDisabled, 
        handleDelete] = useTodo("", dummyData);

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
                <Form.Button disabled={isButtonDisabled}><AiOutlineSend/></Form.Button>
                </Form.Base>
            </Form>
            {items.length > 0 &&
                <List>
                    <List.Base>
                        {items.map(item => (
                            <List.Item 
                                key={item.id}
                                isCompleted={item.isCompleted}>
                                <List.Data 
                                    isCompleted={item.isCompleted} 
                                    onClick={() => handleClick(item.id)}
                                >{item.data}</List.Data>
                                <List.Action onClick={() => handleDelete(item.id)}><AiOutlineCloseCircle/></List.Action>
                            </List.Item>
                        ))}
                    </List.Base>
                </List>
            }
        </>
    );
};

export default TodoContainer;
