import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './views/Inicio';
import Login from './views/Login';
import Cuenta from './views/Cuenta';
import CerrarSesion from './views/CerrarSesion';
import Productos from './views/Productos';
import FichaProducto from './views/FichaProducto';
import './style/style.css';
import AnadirProducto from './views/AnadirProducto';

ReactDOM.createRoot(document.getElementById('root')).render(

<Router>

  <Header />

    <Routes>
      <Route path='/' element={<Inicio/>} />
      <Route path='/productos' element={<Productos/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/areacliente' element={<Cuenta/>} />
      <Route path='/cerrarsesion' element={<CerrarSesion/>} />
      <Route path='/productos/:id' element={<FichaProducto />} />
      <Route path='/productos/anadirProducto' element={<AnadirProducto />} />
    </Routes>

  <Footer />

</Router>

);
