import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
//import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignInPage from '../SignIn';
import SignInEmisorPage from '../SignInEmisor';
import EmisionPage from '../constancia-emision';
import RegistroPage from '../constancia-registro';

import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      {/* <Navigation /> */}
      
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.CONSTANCIA_EMISION} component={EmisionPage} />
      <Route path={ROUTES.CONSTANCIA_REGISTRO} component={RegistroPage} />
      <Route path={ROUTES.EMISOR} component={SignInEmisorPage} />
    </div>
  </Router>
);
export default App;