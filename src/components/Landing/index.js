import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const LandingPage = () => (
  <div className="App">

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

    <section className='background_home'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-7 offset-md-2">
            <h1 className="title_1">Valida tu esfuerzo con UPC BLOCKCERTS</h1>
            <h2 className="title_2">Usamos la tecnología Blockchain para que puedas validar tus certificados y puedas buscarlos y compartirlos cuando lo necesites.</h2>
          </div>

          <div className="col-md-8 offset-md-2  ">
            <input type="text" name="hash" className="form-control search_bar" id="exampleFormControlInput1" placeholder="Ingresa el hash o URL" />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-6 offset-md-2 text-left">
            <p className="p">Si quieres ver todos tus certificados, prueba <a href="login.html" className="p">Iniciar sesión</a></p>
          </div>
          <div className="col-xs-12 col-md-2">
            <button className="main_button blanco block-center">Validar</button>
          </div>
        </div>
      </div>
    </section>

    <section className="container achievements">
      <h2 className="upc-sgothic text-center">certifica y comparte tus logros</h2>
      <div className="row">
        <div className="col-lg-4">
          <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>
          <h3 className="upc-sgothic">consulta cuando quieras</h3>
          <p>Los certificados de UPC Blockcerts pueden ser consultados en cualquier momento y en cualquier plataforma de blockchain</p>
        </div>
        <div className="col-lg-4">
          <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>
          <h3 className="upc-sgothic">Certificados seguros</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</p>
        </div>
        <div className="col-lg-4">
          <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>
          <h3 className="upc-sgothic">Fácil y simple</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</p>
        </div>
      </div>
    </section>

  </div>
);

export default LandingPage;