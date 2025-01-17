import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Login, SignUp} from '../LoginSignUp';
import {NotFound} from '../NotFound';
import {Wall} from '../Wall';
import {Followers} from '../Followers';



function App() {
  return (
      <Router>
          <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/wall" component={Wall}/>
              <Route path="/users" component={Followers}/>
              <Route path="*" component={NotFound}/>
          </Switch>
      </Router>
  );
}

export default App;
