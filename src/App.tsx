import Funciones from "./typeScript/Funciones";
import ObjetosLiterales from "./typeScript/ObjetosLiterales";
import TiposBasicos from "./typeScript/TiposBasicos";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TS-React</h1>
      <hr />
      <TiposBasicos />
      <hr />
      <ObjetosLiterales />
      <hr />
      <Funciones />
    </div>
  );
};

export default App;
