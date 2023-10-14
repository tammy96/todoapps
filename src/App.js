import './todo.css';
import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [values, setValues] = useState("");

  const valueShown = (e) => {
    setValues(e.target.value);
  };

  const clearField = () => {
    setValues("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo([...todo, values]);
    console.log(todo);
    clearField();
  };

  const deleteTodo = (index) => {
      setTodo(prevTodo => prevTodo.filter((_, i) => i !== index));
  };

  const editTodo = (index) => {
    setTodo(prevTodo => prevTodo.map)
  }

  return (
    <div>
      <h1>hello world</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={valueShown} value={values} />
        <button type="submit" disabled={values.trim() === ""}>
          Submit
        </button>

        {todo.map((list, index) => (
          <div key={index}>
            <div className="todos">
              <div>{list}</div>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>

          </div>
        ))}
      </form>
    </div>
  );
}

export default App;
