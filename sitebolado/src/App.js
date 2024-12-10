import './App.css';
import Ev from './components/Evento';
import MC from './components/MeusComponentes';
import Soma from './components/NovoComponente';
import PC from './components/PrimeiroComponenete';
import TpExp from './components/TemplateExpressions';
import cidade from './assets/cidade.jpeg'

function App() {
  return (
      <div className="App">
        <h1>Fundamentos do React 1</h1>
        <PC />
        <TpExp />
        <MC />
        <Ev />
        <Soma />
        <img src="/paisagem.jpg" alt="" width="300px" />
        <img src={cidade} alt="" width="300px"/>
      </div>
  );
}

export default App;
