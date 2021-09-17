import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  return (
    <React.Fragment>
      <Header
        title="Clima React App" />
      <div className="contenedor-form">

        <div className="container">

          <Formulario />

        </div>

      </div>
    </React.Fragment>
  );
}

export default App;
