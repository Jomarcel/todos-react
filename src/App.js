import Todos  from './components/Todos'
import React, { Component } from 'react'
import Addform from './components/Addform'
// import background from './background.jpg'


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

   addToDo = (todo) => {
    // use the ... operator to get each item in the array. The todo paramenter accepts user input from the textfield
    // which is passed in from the addform component
    let newToDoList = [...this.state.todos, todo]
    todo.key = Math.random();
    this.setState({
      todos: newToDoList
    })
   }
  render() { 
    return (  
      <div className = 'todos-app container'>
        <h1 className="center blue-text">Todos</h1>
        <Todos todos = {this.state.todos}  deleteToDo = {this.deleteToDo}></Todos>
        {/* <img src={background} alt="my background"/> */}
        <Addform addToDo = {this.addToDo}/>
      </div>
    );
  }
}
 
export default App;