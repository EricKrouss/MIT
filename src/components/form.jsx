import React from "react";
import ReactDOM from "react-dom/client";

function TodoForm({addTodo}){
    const [value,setValue] = React.useState('');
    
    const handleSubmit = e => {
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue('');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          className="input"
          value={value}
          placeholder="Add To-Do Item..."
          onChange={e => setValue(e.target.value)} />
      </form>
    )
  }

export default TodoForm;