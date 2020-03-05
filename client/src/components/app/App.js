import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {Login, SignUp} from '../LoginSignUp';
import {NotFound} from '../NotFound';
import {Profile} from '../Profile';
import {Notification} from '../Notifications';


function App() {
  return (
      <Router>
          <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/wall" component={Profile}/>
              <Route path="/Notifications" component={Notification}/>
              <Route path="*" component={NotFound}/>
          </Switch>
      </Router>
  );
}

export default App;
