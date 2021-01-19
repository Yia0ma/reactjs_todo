import {useState} from "react";

const useForm = (val) => {
    const [input, setInput] = useState(val);

    const handleInput = event => setInput(event.target.value);

    const handleSubmit = event => event.preventDefault();

    return [input, handleInput, handleSubmit];
};

export default useForm;