import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const EmisionPage = () => (
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
            <h2 className="title">Constancias emitidas</h2>
          </div>
          <div className="col-6 text-right">
            <Link className="main_button blanco" to={ROUTES.CONSTANCIA_REGISTRO}>Emitir constancias</Link>
          </div>
        </div>
      </div>
    </header>

    {/* <section className="background_gray"> */}
    <div className="container">
      <div className="row pt-4 pb-5">
        <div className='col-6 col-sm-6 text-left'>
          {/* <div className="row">
            <div className='col-6'>
              <select className="form-control">
                <option value="DNI">DNI</option>
                <option value="PASAPORTE">PASAPORTE</option>
              </select>
            </div>
            <div className='col-6'>
              <input type="text" placeholder="Buscar" className='form-control input' />
            </div>
          </div> */}
        </div>
        <div className='col-6 col-sm-6 text-right'>
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

      <div className="row">
        <div className="col-sm-4">
          <div className="card rounded-0 shadow-sm p-3 mb-3 active">
            <div className="card-body p-0">
              <p className="text-right mb-4">10/09/2019</p>
              <h5 className="card-title m-0">XI Congreso de Educadores</h5>
              <p className="card-text">Facultad de Educación</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card rounded-0 shadow-sm p-3 mb-3">
            <div className="card-body p-0">
              <p className="text-right mb-4">10/09/2019</p>
              <h5 className="card-title m-0">XI Congreso de Educadores</h5>
              <p className="card-text">Facultad de Educación</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card rounded-0 shadow-sm p-3 mb-3">
            <div className="card-body p-0">
              <p className="text-right mb-4">10/09/2019</p>
              <h5 className="card-title m-0">XI Congreso de Educadores</h5>
              <p className="card-text">Facultad de Educación</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card rounded-0 shadow-sm p-3 mb-3">
            <div className="card-body p-0">
              <p className="text-right mb-4">10/09/2019</p>
              <h5 className="card-title m-0">XI Congreso de Educadores</h5>
              <p className="card-text">Facultad de Educación</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card rounded-0 shadow-sm p-3 mb-3">
            <div className="card-body p-0">
              <p className="text-right mb-4">10/09/2019</p>
              <h5 className="card-title m-0">XI Congreso de Educadores</h5>
              <p className="card-text">Facultad de Educación</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card rounded-0 shadow-sm p-3 mb-3">
            <div className="card-body p-0">
              <p className="text-right mb-4">10/09/2019</p>
              <h5 className="card-title m-0">XI Congreso de Educadores</h5>
              <p className="card-text">Facultad de Educación</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-3 pb-3 pr-0">
        <div className="col-6">
          <button className="main_button negro">Ver todos</button>
        </div>
        <div className="col-6">
          <nav aria-label="navigation">
            <ul className="pagination justify-content-end">
              <li className="p-2"><span className="zizou-light">1/10</span></li>
              <li className="page-item">
                <a className="page-link" href="#" tabindex="-1" aria-disabled="true">&lt;</a>
              </li>
              <li className="page-item">
                <a className="page-link rounded-0" href="#">&gt;</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    {/* </section> */}

  </div>
);

export default EmisionPage;