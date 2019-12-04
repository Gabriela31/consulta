import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const RegistroPage = () => (
  <div className="Admin">

    <header>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <a href="./" className="navbar-brand d-flex align-items-center">
              <img src="./upc-logo.png" alt="UPC Logo" width='40px' />
              <span className='home d-none d-sm-block'>UPC BLOCKCERTS</span>
            </a>
          </div>
          <div className="col-6 text-right pt-3">
            <span className="zizou-light">Hola Lourdes</span>
          </div>
        </div>
        <br /><br /><br />
        <div className="row">
          <div className="col-6">
            <h2 className="title">Emisión de constancias</h2>
          </div>
          <div className="col-6 text-right">
            <Link className="main_button blanco" to={ROUTES.SIGN_IN}>Emitir constancias</Link>
          </div>
        </div>
      </div>
    </header>

    {/* <section className="background_gray"> */}
    <div className="container">
      <div className="row pt-4 pb-4">
        <div className='col-6 col-sm-6 text-left pl-0'>
          <h3 className="upc-sgothic">Registro de datos</h3>
        </div>
        <div className='col-6 col-sm-6 text-right pr-0'>
          <div className="row">
            <div className='col-6'>
              <select className="form-control">
                <option value="DNI">DNI</option>
                <option value="PASAPORTE">PASAPORTE</option>
              </select>
            </div>
            <div className='col-6'>
              <input type="text" placeholder="Buscar" className='form-control input' />
            </div>
          </div>
        </div>
      </div>

      <div className="row border pt-3 pb-3 blanco">
        <div className='col-12 col-sm-12 text-right'>
          <button className="main_button negro">Subir CSV</button>
        </div>
      </div>
      <div className="row border blanco">
        <table className="table">
          <thead className="thead-light upc-sgothic">
            <tr>
              <th scope="col">DNI</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Area Emisora</th>
              <th scope="col">Nombre del evento</th>
              <th scope="col">Fecha del evento</th>
            </tr>
          </thead>
          <tbody className="zizou-light">
            <tr>
              <td>72748745</td>
              <td>Gabriela</td>
              <td>Vega</td>
              <td>Tramites</td>
              <td>UPC</td>
              <td>19 de Diciembre</td>
            </tr>
            <tr>
              <td>72748745</td>
              <td>Gabriela</td>
              <td>Vega</td>
              <td>Tramites</td>
              <td>UPC</td>
              <td>19 de Diciembre</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col text-right pt-3 pb-3 pr-0">
          <button className="main_button negro">Emitir constancias</button>
        </div>
      </div>
    </div>
    {/* </section> */}

  </div>
);

export default RegistroPage;