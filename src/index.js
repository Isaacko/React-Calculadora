import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*No olvidar improtar el .app en caso no este */
import App from './App';



/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


