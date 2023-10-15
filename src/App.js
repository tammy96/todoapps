import './todo.css';
import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  const [values, setValues] = useState('');
  const [value, setValue] = useState('')

  const valueShown = (e) => {
    setValues(e.target.value);
  };

  const valuesShown = (e) => {
    setValue(e.target.value)
  }

  const clearField = () => {
    setValues('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.trim() === '') {
      return; // Prevent adding empty todos
    }

    if (values !== '') {
      setTodo([values, ...todo]);
      clearField();
    }
  };

  const deleteTodo = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  };

  const [editIndex, setEditIndex] = useState(-1); // Initialize with -1 to indicate no editing.

  const startEdit = (index) => {
      setEditIndex(index);
      setValue(todo[index]);
  };

  const saveEdit = (index) => {
    const updatedTodo = [...todo];
    updatedTodo[index] = value;
    setTodo(updatedTodo);
    setEditIndex(-1); // Reset editIndex to -1 after editing.
    clearField();
  };

  const cancelEdit = () => {
    setEditIndex(-1)
  }

  return (
    <div className='formss'>
      <h1>hello world</h1>
      <form onSubmit={handleSubmit} className='inputs'>
        <input className='inputfields' type="text" onChange={valueShown} value={values} />
        <button type="submit" className='inputfields'>Submit</button>
        </form>
      {todo.map((list, index) => (
        <div key={index}>
          {editIndex === index ? (
            <div>
              <input className='inputfield' type="text" value={value} onChange={valuesShown} />
              <button onClick={() => saveEdit(index)}>Save</button>
              {/* <button onClick={() => deleteTodo(index)}>Delete</button> */}
              <button onClick={() => cancelEdit(index)}>Cancel</button>
            </div>
          ) : (
            <div className='todo'>
              <div>{list}</div>
                <div>
                <button onClick={() => startEdit(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
                </div>
            </div>
          )}
        </div>
      ))}
       
    </div>
  );
}

export default App;
