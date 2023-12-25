import React, { useState } from 'react';
import { useTodo } from '../contexts/Todocontext';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo('');
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black rounded-l-lg px-3 outline-none duration-150 bg-gray-700 py-2"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="border border-black rounded-r-lg bg-green-600 text-white px-4 py-2"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
