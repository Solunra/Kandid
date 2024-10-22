import React,{Component} from "react";
import {Link, Route, Switch} from "react-router-dom";
import './index.css';
import request from 'superagent';
import  { Redirect } from 'react-router-dom'

export default class SignUp extends Component{
    constructor(props) {
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:"",
            toWall:false
        };
        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        let json=JSON.stringify(this.state);
        console.log(json);
        request
            .put("http://localhost:8000/api/register")
            .send({profile: {
                    firstname: this.state.firstName,
                    lastname: this.state.lastName,
                    email: this.state.email,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword,
                }})
            .end((err,res) => {
                if(res.status === 200)
                {
                    this.setState({toWall:true});
                }
        });
    };
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    render() {
        if(this.state.toWall===true){
            return <Redirect to='/'/>
        }
        return(
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <nav className=" navbar-expand-sm navbar-light fixed-top">
                        <div className="container">
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/login"}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

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

                </form>
            </div>
        )
    }

}
