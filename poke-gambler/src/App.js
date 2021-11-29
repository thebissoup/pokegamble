import logo from './logo.svg';
import './App.css';
import { Container, Button } from 'semantic-ui-react';
import Wallet from './components/Wallet'


function App() {
  return (
    <div className="App">
      <h1>PokeDraw</h1>
      <div class="ui divider"></div>
      <Button compact color="blue">Draw</Button>
      <h1>Your Wallet</h1>
      <div class="ui divider"></div>
      <Container>
        <Wallet/>
      </Container>
    </div>
  );
}

export default App;
