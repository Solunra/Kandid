import React,{Component} from "react";
import Login from "../LoginSignUp/login.component.js";
import {Link, Route} from "react-router-dom";


export default class SignUp extends Component{
    constructor(props) {
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:""
        };
        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        let json=JSON.stringify(this.state);
        fetch("http://localhost:8000",{
            method:"POST",
            body:[json]
        });
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" name="firstName" placeholder="First name" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" name="lastName" placeholder="Last name" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" name="confirmPassword" placeholder="Enter password" onChange={this.handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to={"/login"}>Login</Link>
                </p>
                <Route exact path='/login' component={Login} />
            </form>
        )
    }

}