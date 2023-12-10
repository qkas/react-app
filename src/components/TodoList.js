import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

    useEffect(() => {
      const randomShade = () => Math.floor(Math.random() * 76) + 150;
      const grayValue = randomShade();
      const randomGrayColor = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
  
      document.body.style.backgroundColor = randomGrayColor;
    }, [todos]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onRemoveTodo={() => handleRemoveTodo(index)} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
