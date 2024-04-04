import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header className='header'>
        <h1>Woofy</h1>
        <ul className='header__list'>
            <li className='headerList__element'><Link className='headerList__element--link' to={'/'}>Inicio</Link></li>
            <li className='headerList__element'><Link className='headerList__element--link' to={'/productos'}>Productos</Link></li>
            <li className='headerList__element'><Link className='headerList__element--link' to={'/productos/anadirProducto'}>Añadir producto</Link></li>
            {localStorage.getItem('Usuario') == null ? (
                <li className='headerList__element'><Link className='headerList__element--link' to={'/login'}>Iniciar sesión</Link></li>
            ) : (
                <li className='headerList__element'><Link className='headerList__element--link' to={'/areacliente'}>Hola, {localStorage.getItem('Usuario')}</Link></li>
            )}
            {localStorage.getItem('Usuario') == null? (
            <></>
            ) : (
                <li className='headerList__element'><Link className='headerList__element--link' to={'/cerrarsesion'}>Cerrar sesión</Link></li>
            )}



            
            {/* {localStorage.removeItem('Contraseña') == null? <li><Link to={'/cerrarsesion'}>Cerrar sesión</Link></li> : <></>} */}
        </ul>
    </header>
    );
};

export default Header;