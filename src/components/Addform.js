import React, { Component } from 'react'

class Addform extends Component {
    state = { 
        content: ''
     }
     handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
     }
     handleSubmit = (e) => {
         e.preventDefault(); // prevent the page from refreshing on submit
        //  console.log(this.state);
        // pass the content data to function addtodo
        this.props.addToDo(this.state)
        e.target.reset();
     }
    render() { 
        return ( 
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>Add new todo:</label>
                    {/*whenever the type changes fire the onchange event */}
                    <input type = "" text onChange = {this.handleChange}/>
                </form>

            </div>
         );
    }
}
 
export default Addform;