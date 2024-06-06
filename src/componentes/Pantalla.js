import React from "react";

import '../hojas-de-estilo/Pantalla.css';

//No siempre se usa fucntion tmabién se peude trabajar con const
//Se puede definir como contante para que no s epueda reasignar el valor como pantalla
/* Se le asigna la funcion flecha */
const Pantalla = ({ input }) => (
    <div className='input'>
        {input}
    </div>
);

export default Pantalla;