import React, {Component} from "react";
import CardGenerator from "./CardGenerator";
import Wallet1 from "./Wallet";
import { Button, Container, Popup} from 'semantic-ui-react';
class Inventory extends Component{
    constructor(props){
        super(props);
        this.state= {
            pokelist:[]
        }

        this.fetchPokemonList = this.fetchPokemonList.bind(this);
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
    render(){
        return(
            <div>
                <h1>PokeDraw</h1>
                <div class="ui divider"></div>
                <CardGenerator list={this.state.pokelist}/>
                <h1>Your Wallet</h1>
                <div class="ui divider"></div>
                <Container>
                    <Wallet1/>
                </Container>
            </div>
        )
    }
}

export default Inventory;