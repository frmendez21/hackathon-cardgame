import React from 'react';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import { Switch } from 'react-router-dom';
import './App.css'
import NavbarContainer from './components/navbar/navbar_container';
import Landing from './components/landing'
import LoginFormContainer from './components/login/login_form_container';
import SignupFormContainer from './components/signup/signup_form_container';
import GameCanvas from './components/game/game_canvas';

const App = () => (
  <div>
    <NavbarContainer />
    <Switch>
        <AuthRoute exact path="/" component={Landing} />
        <ProtectedRoute exact path ="/game" component={GameCanvas} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;