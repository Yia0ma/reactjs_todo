import {useState} from "react";

const useTodo = (val, todos) => {
    const [input, setInput] = useState(val);
    const [items, setItems] = useState(todos);

    const handleInput = event => setInput(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();

        const newItem = {
            id: items.length,
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

    return [input, items, handleInput, handleSubmit, handleClick];
};

export default useTodo;