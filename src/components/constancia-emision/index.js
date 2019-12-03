import React from 'react';

const EmisionPage = () => (
  <div>

    <section className="background_head1">
      <div className="container">
        <div className="row">
          <div className="col-8 col-sm-8 text-left">
            <span className='title_1'>UPC BLOCKERS</span>
          </div>
          <div className="col-4 col-sm-4 text-right">
            <span className='title_2'>Hola Lourdes</span>
          </div>
        </div>
        <div className="row">
          <div className='col-10 col-sm-10 text-left'>
            <span className='title_2'>Emision de constancias</span>
          </div>
          <div className='col-2 col-sm-2 text-right'>
            <button className="main_button blanco">Emitir constancias</button>
          </div>
        </div>
      </div>
    </section>

    <section className="background_gray">
      <div className="container">
        <div className="row">
          <div className='col-6 col-sm-6 text-left'>
            <span>Registro de datos</span>
          </div>
          <div className='col-6 col-sm-6 text-right'>
            <select>
              <option value="DNI">DNI</option>
              <option value="PASAPORTE">PASAPORTE</option>
            </select>
            <div className='col-6 col-sm-6'>
              <input type="text" placeholder="Buscar" className='input' />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className='col-12 col-sm-12 text-right'>
              <button className="main_button blanco">Subir CSV</button>
            </div>
          </div>
          <div className="row">
            <table>
              <tbody>
                <tr>
                  <th>DNI</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Area Emisora</th>
                  <th>Nombre del evento</th>
                  <th>Fecha del evento</th>
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
        </div>
      </div>
    </section>

  </div>
);

export default EmisionPage;