import React, { Component } from 'react';
import {Card, Icon, Button} from 'semantic-ui-react';


const extra = (
    <a>
      <Icon name='bitcoin' />
      0.000000
    </a> 
  )

const pokemonNames = ["ditto","pikachu","bulbasaur","charmander","mew","omanyte"];

class CardGenerator extends Component{
    constructor(props){
        super(props);
        this.state = {
            image:'https://icones.pro/wp-content/uploads/2021/05/icone-point-d-interrogation-question-gris.png',
            header: 'Null',
            meta: 'None',
            description: 'A blank and empty card...'
        }
        this.fetchPokemon = this.fetchPokemon.bind(this);  
        this.getRandoName = this.getRandoName.bind(this);
        this.getRandoPokemon = this.getRandoPokemon.bind(this);

    }
    getRandoPokemon(){
       let randomName =  this.getRandoName();
       this.fetchPokemon(randomName);
    }
    getRandoName(){
        let randomNumber = Math.floor(Math.random()*pokemonNames.length);
        console.log(randomNumber);
        return pokemonNames[randomNumber];
    }
    async fetchPokemon(name){

        let url = "https://pokeapi.co/api/v2/pokemon/" + name;
        let pokemon;
        await fetch(url) //fetch the pokemon data
                .then(response => response.json())
                .then(data => pokemon = data);
       
        const labelName = (string) =>{ // capitalize string for header & meta
            return string.charAt(0).toUpperCase() + string.slice(1)
        };


        this.setState({ //setState of card properties
            image:pokemon.sprites.front_default,
            header:labelName(pokemon.species.name),
            meta:labelName(pokemon.types[0].type.name)
        })



    }

    render(){
        return(
            <div className = "one column ui centered grid">
                <div style={{visibility: 'visible', paddingTop: 20}}>
                    <Card
                        image={this.state.image}
                        header={this.state.header}
                        meta={this.state.meta}
                        description={this.state.description}
                        extra={extra}
                    />
                    <Button compact color="blue" onClick={this.getRandoPokemon}>Draw</Button>
                </div>
            </div>
        )
    }
}

export default CardGenerator