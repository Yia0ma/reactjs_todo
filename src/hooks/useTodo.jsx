import {useState} from "react";

const useTodo = (val, todos) => {
    const [input, setInput] = useState(val);
    const [items, setItems] = useState(todos);

    const handleInput = event => setInput(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();

        const newItem = {
            id: Math.floor(Math.random() * 1000),
            data: input,
            isCompleted: false
        };

        setItems([...items, newItem]);

        setInput("");
    }

    const handleClick = id => {
        const updatedItems = items.map(item => {
            if (item.id === id) item.isCompleted = !item.isCompleted;
            return item;
        })

        setItems(updatedItems);
    }

    const handleDelete = id => {
        const updatedItems = items.filter(item => item.id !== id);

        setItems(updatedItems);
    }

    const isButtonDisbaled = input.length < 4 || input.trim() === "";

    return [input, items, handleInput, handleSubmit, handleClick, isButtonDisbaled, handleDelete];
};

export default useTodo;