import React, { Component } from 'react';
import { Button} from 'semantic-ui-react';
import CardDisplay from './CardDisplay';



// let slicewords = ["hero","incarnate","g-max"];

let lastNum = -1;
class CardGenerator extends Component{
    constructor(props){
        super(props);
        this.state = {
            image:'https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif',
            header: 'Null',
            meta: 'None',
            description: '...',
            gif: 'https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif',
            png: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1AgnhmtdS-1bGbvvU4HzvIAMO1Tae_II9enZjPScAoKE3IGDt5JqxCA2MkxpN-4p0vLc&usqp=CAU",
            displayState: "sprite"
            
        }
        //------ Data Fetching Methods
        this.fetchPokemon = this.fetchPokemon.bind(this);  
        // this.fetch3DPokemonGif = this.fetch3DPokemonGif.bind(this);
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
        }while(lastNum === randomNumber); //if the last number it was is equal randomNumber repeat
        lastNum = randomNumber;
        return pokemonNames[randomNumber].name;
    }
    //-------------------------------------
    //Desc: takes the name of a pokemon, fetches the data, and assigns the values to state
    async fetchPokemon(name){ 
        let spriteurl = "https://pokeapi.co/api/v2/pokemon/" + name;
        let pokemon;
        console.log(name);

        await fetch(spriteurl) //fetch the pokemon data
                .then(response => response.json())
                .then(data => pokemon = data);
       
        const labelName = (string) =>{ // capitalize string for header & meta
            return string.charAt(0).toUpperCase() + string.slice(1)
        };


        let ARurl = "https://projectpokemon.org/images/normal-sprite/" + name +".gif";


        this.setState({
            gif: ARurl
        })

        if(this.state.displayState == "sprite"){
            this.setState({ //setState of card properties
                image:pokemon.sprites.front_default, // ok for the default
                header:labelName(pokemon.species.name),
                meta:labelName(pokemon.types[0].type.name),
                png:pokemon.sprites.front_default
            }) 
        }else if(this.state.displayState == "ar"){
            this.setState({ //setState of card properties
                image:ARurl, // ok for the default
                header:labelName(pokemon.species.name),
                meta:labelName(pokemon.types[0].type.name),
                png:pokemon.sprites.front_default
            }) 
        }

         
    }
    //-------------------------------------
    //Desc: takes a pokemon name, fetches the info, and sets the state
    // fetch3DPokemonGif(name){
        
    // }
    //-------------------------------------
    //Desc: set image state of card to 3D
    to3D(){
        this.setState({
            image: this.state.gif,
            displayState: "ar"
        })
    }
    //-------------------------------------
    //Desc: set image state of card to 2D
    to2D(){
        this.setState({
            image: this.state.png,
            displayState: "sprite"
        })
    }
    //-------------------------------------
    render(){
        return(
            <div className = "one column ui centered grid">
                <div style={{visibility: 'visible', paddingTop: 20}}>
                    <CardDisplay pokeData={this.state} to3D={this.to3D} to2D={this.to2D}/>
                    <Button compact color="yellow" onClick={this.getRandoPokemon}>Draw</Button>
                    <Button compact color="red" >Collect</Button>

                </div>
            </div>
        )
    }
}


export default CardGenerator