import React from 'react';

const RegistroPage = () => (
  <div>

    <section>
      <div className="row">
        <div className="col">
          <span>UPC BLOCKERS</span>
        </div>
        <div className="col">
          <span>Hola Lourdes</span>
        </div>
      </div>
      <div className="row">
        <div className='col'>
          <span>Constancias Emitidas</span>
        </div>
        <div className='col'>
          <button>Emitir constancias</button>
        </div>
      </div>
    </section>
    <section>
      <div className="row">
        <div className='col'>
          <span>Fechas</span>
        </div>
        <div className='col'>
          <select>
            <option value="DNI">DNI</option>
            <option value="PASAPORTE">PASAPORTE</option>
          </select>
          <input type="text" placeholder="Buscar" />
        </div>
      </div>
      <div>
        <div className="row">
          <div className='col'>
            <button>Descargar CSV</button>
          </div>
        </div>
        <div className="row">
          <table>
            <tbody>
              <tr>
                <th>F. Emision</th>
                <th>DNI</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Area Emisora</th>
                <th>Nombre del evento</th>
                <th>Fecha del evento</th>
                <th>URL</th>
              </tr>
              <tr>
                <td>19 de Diciembre</td>
                <td>72748745</td>
                <td>Gabriela</td>
                <td>Vega</td>
                <td>Tramites</td>
                <td>UPC</td>
                <td>19 de Diciembre</td>
                <td>google.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

  </div>
);

export default RegistroPage;