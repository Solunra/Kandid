import React,{Component} from "react";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import './index.css';
import request from 'superagent';

export default  class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            email:"",
            password:"",
            rememberMe:false,
            toWall:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        let json=JSON.stringify(this.state);
        console.log(json);
        request
            .put("http://localhost:8000/api/login")
            .send({profile: json})
            .end((err,res) => {
                if(res.status == 200)
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
            return <Redirect to='/wall'/>
        }
        return(
            <div className="App">
            <form onSubmit={this.handleSubmit}>
                <nav className="navbar-expand-sm navbar-light fixed-top">
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
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={e=>this.setState({[this.state.rememberMe]:!this.state.rememberMe})}/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Login</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
        );
    }
}