import React from 'react'

function Cuenta() {
  return (
    <><h2>Bienvenido a tu cuenta, {localStorage.getItem('Usuario')}</h2></>
  )
};

export default Cuenta;