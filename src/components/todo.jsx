import React from "react";
function Todo({todo,index,remove}){
    function handle(){
        remove(index);
    }
    return <div className="todo" onClick={handle}>
        {todo.text} <div className="trash">🗑️</div>
    </div>
}

export default Todo;