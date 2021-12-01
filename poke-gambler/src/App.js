import logo from './logo.svg';
import './App.css';
import { Container, Button } from 'semantic-ui-react';
import Wallet1 from './components/Wallet'


const fetchDitto = () =>{ //fetches ditto sprite url
  let sprite = fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  console.log(sprite);
}

function App() {
  return (
    <div className="App">
      <h1>PokeDraw</h1>
      <div class="ui divider"></div>
      <Button compact color="blue" onClick= {fetchDitto}>Draw</Button>
      <h1>Your Wallet</h1>
      <div class="ui divider"></div>
      <Container>
        <Wallet1/>
      </Container>
    </div>
  );
}

export default App;
