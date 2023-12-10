import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="New task"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoForm;
