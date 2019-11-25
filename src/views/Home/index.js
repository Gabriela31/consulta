import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

function Home() {
  return (
    <div className="App">
		<div className="container">
			<div className="row">
				<div className="col-8 col-md-8 text-left">
					<img src="./assets/img/upc-logo.png" alt="UPC Logo" width='40px'/>
					<span id="home_black" className='home'>UPC BLOCKCERTS</span>
				</div>
				<div class="col-4 col-md-4 text-right">
					<button className="main_button negro">Iniciar Sesión</button>
				</div>  
			</div>
		</div>
	<section className='background_home'>
		<div className='container'>
			<div className='row'>
				<div className="col-md-7 offset-md-2 text-left">
						<h1 className="title_1">Valida tu esfuerzo con UPC BLOCKCERTS</h1>
						<h2 className="title_2">Usamos la tecnología Blockchain para que puedas validar tus certificados y puedas buscarlos y compartirlos cuando lo necesites.</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-8 offset-md-2  ">
					<input type="text" name="hash" className="search_bar"/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6 offset-md-2 text-left">
					<span className="p">Si quieres ver todos tus certificados, prueba </span>
					<a href="login.html" className="p">ingresar aqui</a>
				</div>
				<div className="col-md-2">
					<button className="main_button blanco">Validar</button>
				</div>
			</div>
		</div>
	</section>
    </div>
  );
}

export default Home;