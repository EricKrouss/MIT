import React from "react";
import ReactDOM from "react-dom/client";
import TodoForm from "./components/form";
import Todo from "./components/todo";
function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list">
      {todos.map((todo, i) => (
        <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
      ))}
      <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
