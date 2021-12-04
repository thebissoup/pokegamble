import React, { Component } from 'react';
import {Card, Icon, Button, Image} from 'semantic-ui-react';

const extra = (
    <div>
        <a>
            <Icon name='bitcoin' />
            0.000000
            <Button compact floated="right">Trade</Button>
            <Button compact color="green" floated="right">List</Button>
        </a>
    </div>
  )

let slicewords = ["hero","incarnate","g-max"];

let lastNum = -1;
class CardGenerator extends Component{
    constructor(props){
        super(props);
        this.state = {
            image:'https://c.tenor.com/_qKTUm9vp4UAAAAC/animal-crossing-crying.gif',
            header: 'Null',
            meta: 'None',
            description: 'A blank and empty card...',
            gif: null,
            png: null
            //  replace image with png, add a gif property for 3d, and create image property
        }
        this.fetchPokemon = this.fetchPokemon.bind(this);  
        this.getRandoName = this.getRandoName.bind(this);
        this.getRandoPokemon = this.getRandoPokemon.bind(this);
        this.fetch3DPokemonGif = this.fetch3DPokemonGif.bind(this);
    
    }

    getRandoPokemon(){
       let randomName =  this.getRandoName();
       this.fetch3DPokemonGif(randomName);// function that fetches the 3d gif of the pokemon
       this.fetchPokemon(randomName); 
    }

    getRandoName(){ // generate a different random pokemon number each time
        let randomNumber;
        let pokemonNames = this.props.list;
        // let pokemonNames = this.props.pokelist;
        do{
            randomNumber = Math.floor(Math.random()*pokemonNames.length); //set to random num in range
        }while(lastNum == randomNumber); //if the last number it was is equal randomNumber repeat
        lastNum = randomNumber;
        return pokemonNames[randomNumber].name;
    }

    async fetchPokemon(name){
        let url = "https://pokeapi.co/api/v2/pokemon/" + name;
        let pokemon;
        console.log(name);

        await fetch(url) //fetch the pokemon data
                .then(response => response.json())
                .then(data => pokemon = data);
       
        const labelName = (string) =>{ // capitalize string for header & meta
            return string.charAt(0).toUpperCase() + string.slice(1)
        };

        this.setState({ //setState of card properties
            image:pokemon.sprites.front_default, // ok for the default
            header:labelName(pokemon.species.name),
            meta:labelName(pokemon.types[0].type.name),
            png:pokemon.sprites.front_default
        })

        
    }

    fetch3DPokemonGif(name){
        let imageurl = "https://projectpokemon.org/images/normal-sprite/" + name +".gif";
        this.setState({
            gif: imageurl
        })
    }

    render(){
        return(
            <div className = "two column ui centered grid">
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
                <div className = "centered">
                    <Image size="medium"src={this.state.gif}/>
                </div>
                
            </div>
        )
    }
}

export default CardGenerator