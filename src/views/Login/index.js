import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

function Logeo() {
    return(
        <div className="App">
            <div className="container-fluid">
		        <div className="row">
			        <div className="col-sm-8 p-0 text-left">
				        <div className="background_home">
					        <span className="header_login">UPC Blockerts</span>
					        <h1 className="title_login">Todas tus constancias en un mismo lugar, para cuando necesites validarlas</h1>
					        <span>exigete, innova</span>
				        </div>
			        </div>
                    <div className="col-sm-4">
                        <h2 className="sesion_title">Iniciar sesion</h2>
                        <input type="text" name="Usuario" placeholder="Usuario" className="input"/>
                        <input type="password" name="Contraseña" placeholder="Contraseña" className="input"/>
                        <div className="text-left">
                            <a href="./" onClick={Logeo} className="p_2">Olvidaste contraseña</a>
                        </div>   
				        <div>
					        <button className="main_button">Iniciar sesion</button>
				        </div>
				        <div>
					        <button className="main_button">Cancelar</button>
				        </div>
			        </div>
		        </div>
	        </div>   
        </div>
    );
}

export default Logeo;