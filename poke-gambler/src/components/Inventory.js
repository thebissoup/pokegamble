import React, {Component} from "react";
import CardGenerator from "./CardGenerator";
import Wallet1 from "./Wallet";
import {  Container, Popup} from 'semantic-ui-react';

class Inventory extends Component{
    constructor(props){
        super(props);
        this.state= {
            pokelist:[],
            pokewallet:[]
        } // should hold array of objects of pokemon collected from generator

        this.fetchPokemonList = this.fetchPokemonList.bind(this);
        this.collectPokemon = this.collectPokemon.bind(this);
    }
    componentDidMount(){
        this.fetchPokemonList();
    }

    async fetchPokemonList(){
    let url="https://pokeapi.co/api/v2/pokemon?limit=1500";
    let pokemonNames=[];
    
    await fetch(url)
        .then(response => response.json())
        .then(allpokemon => pokemonNames = allpokemon);
        
    this.setState({
        pokelist: pokemonNames.results
    })
    
    }
    //Desc: a function that passes it's state
    collectPokemon(state){
        this.setState({
            pokewallet: [state].concat(this.state.pokewallet)
        })
        console.log(state);

    }

    render(){
        return(
            <div>
                <h1>PokeDraw</h1>
                <div class="ui divider"></div>
                <CardGenerator list={this.state.pokelist} collect={this.collectPokemon}/> 
                {/* pass collect function to card generator and pokewallet to function */}
                <h1>Your Wallet</h1>
                <div class="ui divider"></div>
                <Container>
                    <Wallet1 wallet={this.state.pokewallet} />
                </Container>
            </div>
        )
    }
}

export default Inventory;