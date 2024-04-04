import React from 'react';
import { useState } from 'react';

function Login() {

    const [datosUsuario, setDatosUsuario] = useState({nombre:'', contrasena:''});
    const [login, setLogin] = useState(true);

    function iniciaSesion(e) {
        e.preventDefault();
        //Para enviar los datos con el método POST
        const options = {
            method: 'POST', //Especificamos el método POST
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(datosUsuario), //Pasar el objeto a STRING (solo para método POST, no hay que hacerlo en GET)
        }
        fetch('http://localhost:3000',options) //Hacemos el FETCH con las opciones
        .then((res => res.json())) //Nos traemos el login con el RES.JSON
        .then(data => {
            if (data.state == 'failed') {
                setLogin(false);
            } else {
                setLogin(true);
                localStorage.setItem('Usuario',datosUsuario.nombre);
                localStorage.setItem('Contraseña',datosUsuario.contrasena);
                window.location.replace('/areacliente');

            }
        })
    };

    function actualizarCampo(e) {
        let dato = e.target.name; //Indica si se escribe en el input nombre o contraseña
        let valor = e.target.value; //Valor que se ha escrito en el input nombre o contraseña

        setDatosUsuario({...datosUsuario,[dato]:valor}); //Agrega a los datos anteriores (...datosUsuario) los nuevos datos escritos en los inputs ([dato]:valor)
    }

    // Tenemos que utilizar el método POST para que no se vean en la URL datos tan sensibles como nombre de usuario y contraseña (GET), sino que se oculten (POST)
  return (
    <> 
    {/* No podemos poner un if porque dentro del fragmento solo se admiten ternarios */}
    {login == false? <h4>Usuario o contraseña incorrecto</h4> : <></>}
    <form action="#" method='post' onSubmit={iniciaSesion}>
        <label htmlFor="name">Nombre: </label>
        <input type="text" name='nombre' id='nombre' value={datosUsuario.nombre} onChange={actualizarCampo} />
        <br />
        <label htmlFor="password">Contraseña: </label>
        <input type="text" name='contrasena' id='contrasena' value={datosUsuario.contrasena} onChange={actualizarCampo} />
        <button type="submit">Iniciar sesión</button>
    </form>
    </>
  );
};

export default Login;