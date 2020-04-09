import React from 'react'


const Todos = ({todos, deleteToDo}) => {
  const todolist = todos.length? (
    todos.map(todo => {
      return(
        <div className="collection-item" key = {todo.key}>
          <span >{todo.text}</span>
          <button className="remove-button right" onClick = {() => deleteToDo(todo.key,todo.text)}>Remove</button>          
        </div>
      )
    })
  ) : (
    <p className="center">no todos added</p>
  )
  return (
    <div className="todos collection">
      {todolist}
    </div>

  )
}

export default Todos

