import React from "react";
import './TodoList.css'

interface TodoListProps {
    items:{ id: string, text: string }[];
    onDeleteTodo: (id: string) => void;
  }

const TodoList: React.FC<TodoListProps> = props => {
    
    return( 
    <ul>
        {props.items.map(todo => (
        <li className="theBox" key={todo.id}>
        <span className="spn">{todo.text}</span>
        <button className="bt" onClick={props.onDeleteTodo.bind(null,todo.id)}>DELETE</button>
        </li>
        ))}
    </ul>
    )
};

export default TodoList;