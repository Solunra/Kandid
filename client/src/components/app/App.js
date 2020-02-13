import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {Login, SignUp} from '../LoginSignUp';
import {NotFound} from '../NotFound';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="*" component={NotFound}/>
          </Switch>
      </Router>
  );
}

export default App;
