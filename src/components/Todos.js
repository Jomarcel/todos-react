import React from 'react'

const Todos = ({todos, deleteToDo}) => {
  const todolist = todos.length? (
    todos.map(todo => {
      return(
        <div className="collection-item" key = {todo.key}>
          <span onClick = {() => deleteToDo(todo.key)}>{todo.content}</span>
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

