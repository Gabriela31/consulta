import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignInPage from '../SignIn';

import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      {/* <Navigation /> */}
      
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    </div>
  </Router>
);
export default App;