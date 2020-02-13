import React,{Component} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import './index.css';

export default  class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            email:"",
            password:"",
            rememberMe:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }
    handleSubmit(event){
        let json=JSON.stringify(this.state);
        const response = fetch('http://localhost:8000',{
            method:'POST',
            body:[json]
        });
    }
    render() {
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
                    <input type="email" className="form-control" placeholder="Enter email" name="email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" />
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