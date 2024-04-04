import React from 'react';

function CerrarSesion() {
  {localStorage.removeItem('Usuario')}
  {localStorage.removeItem('Contraseña')}
  
  
  window.location.replace('/')
  
  
  return (
    <><h3>¡Hasta pronto!</h3></>
  )
};

export default CerrarSesion;