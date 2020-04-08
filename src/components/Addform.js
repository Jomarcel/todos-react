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
        if(this.state.content === ''){
            console.log("add sometthing")
            return null;
        }else{
            this.props.addtodo(this.state)  // pass the content data to function addtodo
        }
        // e.target.reset();
        this.setState({
            content: ''
        }, () => {
            console.log("submit called")
        })
     }
    render() { 
        return ( 
            <div>
                <form  onSubmit = {this.handleSubmit}>
                    <label>Add new todo:</label>
                            {/* <img src={background} alt="my background"/> */}
                    {/*whenever the type changes fire the onchange event */}
                    <input placeholder = "enter item" type = "text"  onChange = {this.handleChange} value = {this.state.content}/>
                </form>

            </div>
         );
    }
}
 
export default Addform;