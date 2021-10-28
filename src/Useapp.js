import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from "./App";


function Useapp() {
  return (<Router>

          <Switch>
            <Route exact path='/' component={App} />
            
            
          </Switch>
    </Router>
    
  );
}

export default Useapp;