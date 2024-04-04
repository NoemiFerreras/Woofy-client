import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Productos() {

    const [productos,setProductos] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        const options = {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            },
            signal: controller.signal
        }
        fetch('http://localhost:3000/productos', options)
        .then(res => res.json()) //Nos traemos todos los productos del array con RES
        .then(data => {
            setProductos(data.productos);
        })
        .finally(() => controller.abort());
    },[]);

  return (
    <>
      <div className='section__productos'>
        {productos.map((producto) => {
          return (
            <>
            <div className='producto__card'>
            <img className='productoCard__img' src={producto.img} alt="" />
            <p key={producto.id}><Link className='productoCard__link' to={'/productos/'+producto.id}>{producto.nombre}</Link></p>
            </div>
            </>
          )
        })}
      </div>
    </>
  )
};

export default Productos;