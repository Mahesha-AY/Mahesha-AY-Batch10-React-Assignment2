import React, { Component } from 'react'

export default class CreateAccount extends Component {

        state = {
            user:"",
            email:"",
            phnum:"",
            sname:"",
            pwd:""
             
        }

    handleChange =(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("handle Submit");
        console.log(this.state);
        localStorage.setItem(this.state.user , JSON.stringify(this.state));
        this.setState({
            user:"",
            email:"",
            phnum:"",
            sname:"",
            pwd:""
        })

        this.props.history.push("/createaccount")
    }
    
    render() {
        return (
            <div>
                <br/><br/>
                <form onSubmit={this.handleSubmit}>
                    UserName: <input type="text" placeholder="user name" name="user" value={this.state.user} onChange={this.handleChange} /> <br/><br/>
                    E-Mail: <input type="email" placeholder="e-mail" name="email" value={this.state.email} onChange={this.handleChange} /> <br/><br/>
                    Phone-Number: <input type="number" placeholder="phone-number" name="phnum" value={this.state.phnum} onChange={this.handleChange} /> <br/><br/>
                    Screen-Name: <input type="text" placeholder="screen-name" name="sname" value={this.state.sname} onChange={this.handleChange} /> <br/><br/>
                    Password: <input type="password" placeholder="password" name="pwd" value={this.state.pwd} onChange={this.handleChange} /> <br/><br/>
                    <button type="submit">Submit</button>
                </form>
                </div>


        );
    }
}
