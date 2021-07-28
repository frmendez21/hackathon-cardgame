import React from 'react';
import { AuthRoute } from './util/route_util';
import { Switch } from 'react-router-dom';

import NavbarContainer from './components/navbar/navbar_container';
import Landing from './components/landing'
import LoginFormContainer from './components/login/login_form_container';
import SignupFormContainer from './components/signup/signup_form_container';

const App = () => (
  <div>
    <NavbarContainer />
    <Switch>
        <AuthRoute exact path="/" component={Landing} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;