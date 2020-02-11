import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "../LoginSignUp/login.component.js";
import SignUp from "../LoginSignUp/signup.component.js";

function App() {
  return (
      <Router>
          <div className="App" id="login">
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

              <div className="auth-wrapper">
                  <div className="auth-inner">
                      <Switch>
                          <Route exact path='/' component={Login} />
                          <Route path="/login" component={Login} />
                          <Route path="/sign-up" component={SignUp} />
                      </Switch>
                  </div>
              </div>
          </div>
      </Router>
  );
}

export default App;
