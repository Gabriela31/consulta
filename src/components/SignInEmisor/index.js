import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const SignInEmisorPage = () => (
  <div className="Admin">

    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <h2 className="sesion_title mb-5">UPC Blockcerts</h2>
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="form-group">
                <input type="text" name="Usuario" className="form-control input" placeholder="Usuario" />
              </div>
              <div className="form-group">
                <input type="password" name="Contrasena" className="form-control input" placeholder="Contraseña" />
              </div>
              <div className="form-group text-left">
                <a href="./" className="p_2">Olvidaste tu contraseña</a>
              </div>
              <div className="form-group text-center mt-5">
                <Link className="main_button negro" to={ROUTES.CONSTANCIA_EMISION}>Iniciar Sesión</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-8 p-0 text-left d-none d-sm-block">
          <div className="background_home">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-9">
                  <h1 className="title_login">Las constancias que emitas<br /> estarán certificadas con Blockchain</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default SignInEmisorPage;