import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
    
    <header>
      <div className="navbar fixed-top">
        <div className="container d-flex justify-content-between">
          <a href="test.html" className="navbar-brand d-flex align-items-center">
            <img src="./upc-logo.png" alt="UPC Logo" width='40px' />
            <strong id="home_black" className='home d-none d-sm-block'>UPC BLOCKCERTS</strong>
          </a>
          <Link className="main_button negro" to={ROUTES.SIGN_IN}>Iniciar Sesión</Link>
        </div>
      </div>
    </header>

  </div>
);
export default Navigation;