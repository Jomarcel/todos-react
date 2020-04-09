import Todos  from './components/Todos'
import React, { Component } from 'react'
import Addform from './components/Addform'
import shortid from 'shortid'
// import background from './background.jpg'

//root component to store the state of application
class App extends Component {
  state = { 
    todos: [
      // {key: 1, content: ''},
      // {key: 2, content: ''}
    ]
   }
  
   deleteToDo = (key, myTodo) => {
    // console.log(key); 
    const filteredTodos = this.state.todos.filter(todo => {
      return todo.key !== key
    })
    this.setState({
      todos: filteredTodos
    },() => {
      console.log("removed item:", myTodo,",", "Key:", key)
    })
   }

   addToDo = (todo) => {
    // use the ... operator to get each item in the array. The todo paramenter accepts user input from the textfield
    // which is passed in from the addform component
    let newToDoList = [...this.state.todos, todo]
    // todo.key = Math.random();
    todo.key = shortid.generate();
    this.setState({
      todos: newToDoList
    },() => {
      // console.log("new todo added", todo)
    })
   }
  render() { 
    return (  
      <div className = 'todos-app container' text= "true">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos = {this.state.todos}  deleteToDo = {this.deleteToDo}></Todos>
        {/* <img src={background} alt="my background"/> */}
        <Addform addtodo = {this.addToDo }/>
      </div>
    );
  }
}
 
export default App;