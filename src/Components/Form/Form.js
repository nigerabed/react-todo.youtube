import Button from "../Button/Button";
import Input from "../Input/Input";
import { useState } from "react";

export default function Form(props) {
    const [input, setInput] = useState("")
    function handleChange(event) {

        setInput(event.target.value)

    }

    function handleSubmit(event) {
        event.preventDefault();
        props.AddTask(input);
        setInput("")


    }
    return (
        <form onSubmit={handleSubmit}>
            <Input inputValue={input} onChange={handleChange} />
            <Button text="Add Task" />
        </form>
    )
}