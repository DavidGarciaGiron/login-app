import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Login">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>BLOCKCHAIN, LOGISTICA Y TRANSPORTE</h1>
        </header>
        <body className="App-body">
        <div class="contenedor1">

        <div className="Parte1">
        <h3>WELCOME</h3>
            <p>Bienvenidos  a esta pagina web que ayudara
               a clietnes como proveedores a realizar
                un proceso de entrega
                 de productos mas segura y eficas</p>

             
              
        </div>
        <div className="Parte2">
        <h2>REGISTRO DE USUARIOS</h2>
          
          <select class="glyphicon glyphicon-th-list form-control">
            <option class="form-group" class="form-group" value="">Seleccionar</option>
            <option class="form-group" value="cliente">Cliente</option>
            <option class="form-group" value="proveedor.">Proveedor</option>
          </select><br/>
          
          <input class="form-group glyphicon glyphicon-user" type="number" class="form-control" placeholder="DNI o RUC"/><br/>
          
          <input class="form-group" type="number" class="form-control" placeholder="Contraseña"/><br/>
          
          <a href="#" class="boton1">REGISTRO CLIENTE</a>
          <a href="#" class="boton2">REGISTRO PROVEEDOR</a>  
        </div>
        </div>

       </body>
       
      </div>
    );
  }
}

export default App;
