import Todos  from './components/Todos'
import React, { Component } from 'react'


//root component to store the state of application
class App extends Component {
  state = { 
    todos: [
      {key: 1, content: 'anime'},
      {key: 1, content: 'watch Kdrama'}
    ]
   }
  render() { 
    return (  
      <div className = 'todos-app container'>
        <h1 className="center blue-text">Todos</h1>
        <Todos todos = {this.state.todos}></Todos>
      </div>
    );
  }
}
 
export default App;