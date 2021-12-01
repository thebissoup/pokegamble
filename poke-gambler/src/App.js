import './App.css';
import { Container, Button } from 'semantic-ui-react';
import Wallet1 from './components/Wallet'
import CardGenerator from './components/CardGenerator';



const fetchDitto = () =>{ //fetches ditto sprite url
  let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
                  .then(response => response.json())
                  .then(data => console.log(data));
  //createCard(pokemon);
}

function App() {
  return (
    <div className="App">
      <h1>PokeDraw</h1>
      <div class="ui divider"></div>
      <CardGenerator/>
      {/* <Button compact color="blue" onClick= {fetchDitto}>Draw</Button> */}
      <h1>Your Wallet</h1>
      <div class="ui divider"></div>
      <Container>
        <Wallet1/>
      </Container>
    </div>
  );
}

export default App;
