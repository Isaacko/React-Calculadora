import React from "react";
import freeCodeCampLogo from '../imagenes/Judas-Priest-logo.webp';
import '../App.css'



const Logotipo = () => (

      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={freeCodeCampLogo} 
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp'
        />
    </div>
);

export default Logotipo;
