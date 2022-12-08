import React, { useState} from "react";
import Topo from './componentes/Topo/'
import './App.css'
import SecaoBanner from './componentes/SecaoBanner';
import ExperienciaTrabalho from './componentes/SecaoExperienciaTrabalho/';
import Rodape from './componentes/Rodape/';
import './App.css'

export default function App() {

  const [temaAtual, setOutroTema] = useState(false);

  const escolheTema = () => {
    setOutroTema(!temaAtual);
//teste
  }  
  return (
    <div className="App">
      <header className="App-header">
        <Topo escolheTema={escolheTema} temaAtual={temaAtual} />
        <SecaoBanner temaAtual={temaAtual} />
        <ExperienciaTrabalho temaAtual={temaAtual} />
      
        <Rodape temaAtual={temaAtual}/>    
      </header>
    </div>
  );
}


