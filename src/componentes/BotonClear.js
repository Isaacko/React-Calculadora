import React from "react";
import '../hojas-de-estilo/BotonClear.css'

//aplicamos funcion flecha
const BotonClear = (props) => (
    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children}
    </div>
)

export default BotonClear;

