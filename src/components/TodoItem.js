import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onRemoveTodo }) => (
  <li>
    {todo}
    <button onClick={onRemoveTodo}>Remove</button>
  </li>
);

export default TodoItem;
