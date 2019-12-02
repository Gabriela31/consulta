import React from 'react';

const SignInPage = () => (
  <div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8 p-0 text-left d-none d-sm-block">
          <div className="background_home">
            <div className="container">
              <span className="header_login">UPC Blockerts</span>
              <h1 className="title_login">Todas tus constancias en un mismo lugar, para cuando necesites validarlas</h1>
              <span>exigete, innova</span>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4">
          <h2 className="sesion_title">Iniciar sesión</h2>
          <div class="form-group">
            <input type="text" name="Usuario" className="form-control input" id="" placeholder="Usuario" />
          </div>
          <div class="form-group">
            <input type="password" name="Contraseña" className="form-control input" id="" placeholder="Contraseña" />
          </div>
          <div className="form-group text-left">
            <a href="./" className="p_2">Olvidaste contraseña</a>
          </div>
          <div className="form-group text-center">
            <button className="main_button negro">Iniciar sesion</button>
          </div>
          <div className="form-group text-center">
            <button className="main_button" style={{ border: "1px solid black" }}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default SignInPage;