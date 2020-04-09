import React, { Component } from 'react'
class Addform extends Component {
    state = { 
        text: '',
        bool: false
     }
     handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
     }
     handleSubmit = (e) => {
         e.preventDefault(); // prevent the page from refreshing on submit
        //  console.log(this.state);

        if(this.state.text.length > 0 ){
            this.props.addtodo(this.state)  // pass the text data to function addtodo
            console.log("added item: ", this.state.text)
        }
        else{
            return null
        }

        // e.target.reset();
        this.setState({
            text: '', // clear text after submit
         
        }, () => {
            // console.log("submit called")
        })
     }
    render() { 
        return ( 
            <div>
                <form  onSubmit = {this.handleSubmit}>
                    <label>Add new todo:</label>
                            {/* <img src={background} alt="my background"/> */}
                    {/*whenever the type changes fire the onchange event */}
                    <input placeholder = "enter item" type = "text"  onChange = {this.handleChange} value = {this.state.text}/>
                </form>

            </div>
         );
    }
}
 
export default Addform;