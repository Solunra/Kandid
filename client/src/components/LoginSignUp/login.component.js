import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import "./index.css";
import request from "superagent";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      toWall: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const email = rememberMe ? localStorage.getItem("email") : "";
    this.setState({ email: email, rememberMe: rememberMe });
  }

  handleSubmit = event => {
    const { email, password, rememberMe } = this.state;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("email", rememberMe ? email : "");

    event.preventDefault();
    let json = JSON.stringify(this.state);
    console.log(json);
    request
      .put("http://localhost:8000/api/login")
      .send({ profile: json })
      .end((err, res) => {
        if (res.status == 200) {
          this.setState({ toWall: true });
        }
      });
  };

  handleChange = event => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
    //this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if (this.state.toWall === true) {
      return <Redirect to="/wall" />;
    }
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <nav className="navbar-expand-sm navbar-light fixed-top">
            <div className="container">
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                name="rememberMe"
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                checked={this.state.rememberMe}
                onChange={this.handleChange}
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    );
  }
}
