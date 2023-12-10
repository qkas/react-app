import React from 'react';

const TodoItem = ({ todo, onRemoveTodo }) => (
  <li>
    {todo}
    <button onClick={onRemoveTodo}>Remove</button>
  </li>
);

export default TodoItem;
