import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../imagenes/DM&.png';

const login = () => {
  return (
    <div className="contenedor-login">
      <from class="login-from">
        <img src={Logo} alt="User-login" />
        <p class="text"> Iniciar Sesión</p>
        <input type="text" placeholder="Email o nombre de usuario"></input>
        <input type="password" placeholder="Contraseña"></input>
        <button>REGISTRARSE</button>
        <p>Al registrarte, aceptas nuestras
          Condiciones de uso y politicas de privacidad</p>
        <p>¿No tienes una cuenta? <Link to="Registro">Inscribirse</Link></p>
      </from>
    </div >
  )
}

export default login