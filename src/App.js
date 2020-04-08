import Todos  from './components/Todos'
import React, { Component } from 'react'


//root component to store the state of application
class App extends Component {
  state = { 
    todos: [
      {key: 1, content: 'anime'},
      {key: 2, content: 'watch Kdrama'}
    ]
   }
   deleteToDo = (key) => {
    // console.log(key);
    const filteredTodos = this.state.todos.filter(todo => {
      return todo.key !== key
    })
    this.setState({
      todos: filteredTodos
    })
   }
  render() { 
    return (  
      <div className = 'todos-app container'>
        <h1 className="center blue-text">Todos</h1>
        <Todos todos = {this.state.todos}  deleteToDo = {this.deleteToDo}></Todos>
      </div>
    );
  }
}
 
export default App;