import React from 'react';
import Todos  from './Todos'

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
        
      </div>
    );
  }
}
 
export default App;