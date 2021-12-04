import React, { Component } from 'react';
import {Card, Icon, Button, Image} from 'semantic-ui-react';
import CardDisplay from './CardDisplay';



let slicewords = ["hero","incarnate","g-max"];

let lastNum = -1;
class CardGenerator extends Component{
    constructor(props){
        super(props);
        this.state = {
            image:'https://c.tenor.com/_qKTUm9vp4UAAAAC/animal-crossing-crying.gif',
            header: 'Null',
            meta: 'None',
            description: '...',
            gif: null,
            png: null
            //  replace image with png, add a gif property for 3d, and create image property
        }
        //------ Data Fetching Methods
        this.fetchPokemon = this.fetchPokemon.bind(this);  
        this.fetch3DPokemonGif = this.fetch3DPokemonGif.bind(this);
        //------ Pokemon Selection Method
        this.getRandoName = this.getRandoName.bind(this);
        this.getRandoPokemon = this.getRandoPokemon.bind(this);
        //----- View Methods
        this.to3D = this.to3D.bind(this);
        this.to2D = this.to2D.bind(this);
    
    }
    //-------------------------------------
    //Desc: runs the  all consecutive functions needed to call API
    getRandoPokemon(){
       let randomName =  this.getRandoName();
       this.fetch3DPokemonGif(randomName);// function that fetches the 3d gif of the pokemon
       this.fetchPokemon(randomName); 
    }
    //-------------------------------------
    //Desc: picks a random pokemon
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
    //-------------------------------------
    //Desc: takes the name of a pokemon, fetches the data, and assigns the values to state
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
    //-------------------------------------
    //Desc: takes a pokemon name, fetches the info, and sets the state
    fetch3DPokemonGif(name){
        let imageurl = "https://projectpokemon.org/images/normal-sprite/" + name +".gif";
        this.setState({
            gif: imageurl
        })
    }
    //-------------------------------------
    //Desc: set image state of card to 3D
    to3D(){
        this.setState({
            image: this.state.gif
        })
    }
    //-------------------------------------
    //Desc: set image state of card to 2D
    to2D(){
        this.setState({
            image: this.state.png
        })
    }
    //-------------------------------------
    render(){
        return(
            <div className = "one column ui centered grid">
                <div style={{visibility: 'visible', paddingTop: 20}}>
                    <CardDisplay pokeData={this.state} to3D={this.to3D} to2D={this.to2D}/>
                    <Button compact color="yellow" onClick={this.getRandoPokemon}>Draw</Button>
                </div>
            </div>
        )
    }
}


export default CardGenerator