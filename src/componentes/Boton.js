import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton(props){

    //definimos  el valor veradero flaso para el operador children

    const esOperador = valor =>{
        //Leyendo: Si el Valor no es un numero
        return isNaN(valor)
        //No es el punto
         && (valor !== '.') 
         //No es el signo de igual, entocnes se considera como un 'operador' y se retorna el valor verdadero/true
         && (valor !== '=');
         //De lo contrario sera falso 
    };

    // validar resultado y operador
    
    /*forma con condicionales */
    
    if(esOperador(props.children)){
        return(
            <div
            // esto se retorna si es verdadero
                className='boton-contenedor operador'
                onClick={() => props.manejarClic(props.children)}>
                {props.children}    
                </div>
        )
    }else{
        // reprotar si es falso
        return(
        <div
                className='boton-contenedor'
                onClick={() => props.manejarClic(props.children)}>
                {props.children}    
                </div>
        );
    }

    
    /*forma sin condicionales */
    /*
    // trimEnd = Elimina espacios en la parte final de las clases
    return (
        <div
            className={`boton-contenedor ${esOperador(props.children) ?'operador' : null}`.trimEnd() }
            // '() =>' dice que queremos que nuestro eventlistener(ollente de eventos) llame un evento,d e lo contrario solo devovlera valor cadena
            onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    );

    //
    */
}

export default Boton;