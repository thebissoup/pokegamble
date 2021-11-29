import logo from './logo.svg';
import './App.css';
import { Container, Card, Icon, Button } from 'semantic-ui-react';

const extra = (
  <a>
    <Icon name='bitcoin' />
    0.000018
    <Button compact floated="right">Trade</Button>
    <Button compact color="green" floated="right">List</Button>
    
  </a>
  
)

function App() {
  return (
    <div className="App">
      <h1>PokeDraw</h1>
      <div class="ui divider"></div>
      <Button compact color="blue">Draw</Button>
      <h1>Your Wallet</h1>
      <div class="ui divider"></div>
      <Container>
        <div className="ui grid stackable" style ={{padding: "25px" }}>
          <div class="four wide column"> 
            <Card
              image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
              header='Ditto'
              meta='Normal'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              extra={extra}
            />
          </div>
          <div class="four wide column">
            <Card
                image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                header='Ditto'
                meta='Normal'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
              />
          </div>
          <div class="four wide column">
            <Card
                image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                header='Ditto'
                meta='Normal'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
              />
          </div>
          <div class="four wide column">
            <Card
                image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                header='Ditto'
                meta='Normal'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
              />
          </div>
          <div class="four wide column">
            <Card
                image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                header='Ditto'
                meta='Normal'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
              />
          </div>
          
        </div>
        
      </Container>
    </div>
  );
}

export default App;
