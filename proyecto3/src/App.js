import './App.css';
import calculadora from "./imagenes/Calculadora.png"
import Boton from "./componentes/Boton";

function App() {
  return (
    <div className="App">
      
      <div className="logo-contenedor">

        <img 

        src= {calculadora}
        className= "logo"
        alt= "logo"

        />

      </div>

      <div className="contenedor-calculadora">

        <div className="fila">
          <Boton>1</Boton>
        </div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>

      </div>



    </div>
  );
}

export default App;
