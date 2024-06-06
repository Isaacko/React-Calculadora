
import './App.css';
import freeCodeCampLogo from './imagenes/Judas-Priest-logo.webp';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import Logotipo from './componentes/Logo';
import { useState } from 'react';
//libreria externa para calcular operaciones matematicas
import { evaluate } from 'mathjs';

function App() {

  //se usa el input como valor de la pantalla
  const [input, setInput]= useState('');
  // nuevo estado
  const [resultado, setResultado] = useState(false);
  
  // calcular resultado + validacion
  const calcularResultado = () => {
    if (resultado) {
      alert("El resultado ya ha sido calculado. por favor, seleccione un operador");
    } else if (input) {
      setInput(evaluate(input));
      setResultado(true);
    } else {
      alert("Por favor ingrese valores para realizar cálculos");
    }
  };

  const agregarInput = val =>{
    //Si hay un resultado, y el usuario agregaun nuevo valor, reiniciamos el estado
    if (resultado){
      setInput(val);
      setResultado(false);
    }else{
      setInput(input + val);
    }
  };
  //calcular resultado 
  /*
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar calculos.")
    } 
  };
  
    //funcion agregar input, tipo flecha
    const agregarInput = val => {
      // en este cao el operador '+' funciona a modo de concatenación
      // Se va unir las dos cadenas de caracteres
      setInput(input + val);
    };
  */
  // definir operador y validar igual
    
  return (
    <div className="App">
      
      <div className={(Logotipo)}>

      </div>
      

        <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'> 
          <Boton manejarClic={agregarInput} >1</Boton>
          <Boton manejarClic={agregarInput} >2</Boton>
          <Boton manejarClic={agregarInput} >3</Boton>
          <Boton manejarClic={agregarInput} >+</Boton>

        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado} >=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
