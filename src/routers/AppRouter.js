import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import {LoginScreen} from '../components/login/LoginScreen';
import {Sidebar} from '../components/ui/Sidebar';
import {RegisterScreen} from '../components/login/RegisterScreen';

export const AppRouter = () => {
    return (
        <Router>
        <Switch>
            <Route exact path="/" component={RegisterScreen }/> 
        </Switch>
   
       </Router>
         
    )
}
