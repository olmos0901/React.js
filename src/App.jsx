import React, { useState } from "react";
import "./index.css";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTodo() {
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  }

  function handleDeleteTodo(index) {
    setTodos(todos.filter(($, i) => i !== index));
  }

  return (
    <>
      <div className="w-50 mx-auto d-flex">
        <input
          className="form-control"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-primary ml-3" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul className=" w-25 mx-auto mt-4 border border-info">
        {todos.map((todo, i) => (
          <li className="item_list d-flex justify-content-between" key={i}>
            {todo}
            <p>
              {new Date().getFullYear()}.{new Date().getMonth()}.
              {new Date().getUTCDate()}//{new Date().getHours()}:
              {new Date().getMinutes()}.{new Date().getSeconds()}
            </p>

            <button
              className="btn btn-danger"
              onClick={() => handleDeleteTodo(i)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <div>
      <h1 className="text-center">Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
