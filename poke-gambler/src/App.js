import './App.css';
import { Container} from 'semantic-ui-react';
import Wallet1 from './components/Wallet'
import CardGenerator from './components/CardGenerator';


function App() {
  return (
    <div className="App">
      <h1>PokeDraw</h1>
      <div class="ui divider"></div>
      <CardGenerator/>
      <h1>Your Wallet</h1>
      <div class="ui divider"></div>
      <Container>
        <Wallet1/>
      </Container>
    </div>
  );
}

export default App;
