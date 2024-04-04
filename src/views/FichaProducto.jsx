import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FichaProducto() {

    let {id} = useParams();

    const [producto,setProducto] = useState({});

    useEffect(() => {
        const controller = new AbortController();
        const options = {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            },
            signal: controller.signal
        }
        fetch('http://localhost:3000/productos/detalle?id='+id, options)
        .then(res => res.json())
        .then(data => {
            setProducto(data.fichaProducto)
        })
        .finally(() => controller.abort());
    },[]);

  return (
    <>
    <h2>{producto.nombre}</h2>
    <h3>{producto.precio} €</h3>
    <p>{producto.descripcion}</p>
    </>
  );
};

export default FichaProducto;