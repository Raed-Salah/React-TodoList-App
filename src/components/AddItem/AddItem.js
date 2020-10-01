import React, {Component} from 'react';
// import "../../index.css"

class AddItem extends Component{
    state = {
        name : "",
        age : ""
    }

    handleChange = (e) => {
        this.setState(
            {
              [e.target.id] : e.target.value
            }
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.name.value === ""){
            return false;
        }
        else{
            this.props.addItem(this.state)
            this.setState({
                name:"",
                age:""
                 }
            )
        }
    }

    render(){
        return(
            <div className="additem">
                <form onSubmit={this.handleSubmit}>
                    <input className="form_name" type="text" placeholder="Enter Your name ... " id="name" onChange={this.handleChange} value={this.state.name}/>
                    <input className="form_age"type="number" placeholder="Enter age ... " id="age" onChange={this.handleChange} value={this.state.age}/>
                    <input className="form_submit"type="submit" value="Add Todo" />
                </form>
            </div>
        )
    }
}

export default AddItem
