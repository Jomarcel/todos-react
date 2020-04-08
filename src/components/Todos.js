import React from 'react'

const Todos = ({todos, deleteToDo}) => {
  const todolist = todos.length? (
    todos.map(todo => {
      return(
        <div className="collection-item" key = {todo.key}>
          <span >{todo.content}</span>
          <button className="remove-button right" onClick = {() => deleteToDo(todo.key, todo.content)}>Remove</button>
          
        </div>
      )
    })
  ) : (
    <p className="center">You have no todos left</p>
  )
  return (
    <div className="todos collection">
      {todolist}
      
    </div>

  )
}

export default Todos

