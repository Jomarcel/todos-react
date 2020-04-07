import Todos  from './Todos'
import React, { Component } from 'react'


//root component to store the state of application
class App extends Component {
  state = { 
    todos: [
      {id: 1, content: 'anime'},
      {id: 1, content: 'watch Kdrama'}
    ]
   }
  render() { 
    return (  
      <div>
        <Todos></Todos>
      </div>
    );
  }
}
 
export default App;