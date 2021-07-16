import React, { useRef } from "react";
import './NewTodo.css'

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    };

    return <form className="ToInput" onSubmit={todoSubmitHandler}>
        <div>
            <label className="label" htmlFor="todo-text">Activity: </label>
            <input className="input" type="text" id="todo-text" ref={ textInputRef } />
        </div>
        <button className="button" type="submit">ADD ACTIVITY</button>
    </form>;
};

export default NewTodo;