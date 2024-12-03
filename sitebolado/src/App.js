import './App.css';
import Ev from './components/Evento';
import MC from './components/MeusComponentes';
import Soma from './components/NovoComponente';
import PC from './components/PrimeiroComponenete';
import TpExp from './components/TemplateExpressions';

function App() {
  return (
      <div className="App">
        <h1>Fundamentos do React 1</h1>
        <PC />
        <TpExp />
        <MC />
        <Ev />
        <Soma />
      </div>
  );
}

export default App;
