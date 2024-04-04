import React, { useState } from 'react';

function AnadirProducto() {

  return (
    <form className='crearProducto__form' action="http://localhost:3000/productos/anadirProducto" method='post'>
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" name='nombre' id='nombre' />
      <br />
      <label htmlFor="estado">Estado del producto:</label>
      <select name="estado" id="estado">
        <option value="estado-nuevo">Nuevo</option>
        <option value="estado-pocoUsado">Poco usado</option>
        <option value="estado-muyUsado">Muy usado</option>
      </select>
      <br />
      <label htmlFor="precio">Precio:</label>
      <input type="text" name='precio' id='precio' />
      <br />
      <label htmlFor="descripcion">Descripción:</label>
      <textarea name="descripcion" id="descripcion" cols="30" rows="10"></textarea>
      <br />
      <input type="submit" value="Publicar producto"  />
    </form>
  );
};

export default AnadirProducto;