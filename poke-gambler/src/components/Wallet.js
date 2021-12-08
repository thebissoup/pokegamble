import React , { Component }from 'react';
import {Icon, Button } from 'semantic-ui-react';

 // the jsx that will be modified

 let pokedex = [{"image":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png","header":"Gigalith","meta":"Rock","description":"...","gif":"https://projectpokemon.org/images/normal-sprite/gigalith.gif","png":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png","displayState":"sprite"}, {"image":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png","header":"Goomy","meta":"Dragon","description":"...","gif":"https://projectpokemon.org/images/normal-sprite/goomy.gif","png":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png","displayState":"sprite"}, {"image":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png","header":"Leafeon","meta":"Grass","description":"...","gif":"https://projectpokemon.org/images/normal-sprite/leafeon.gif","png":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png","displayState":"sprite"} ];

 

function Wallet1 (){ // needs to be changed to a class component

    return(
        <div className=" centered grid carton-bar">
            {
                pokedex.map( pokemon =>{
                    return( <div class="column">
                                <div className="card-special">
                                    <div className="image-offset" >
                                        <img alt ="Ditto" className='sprite' src={pokemon.png}/>
                                    </div>
                                    <h1 className="name">{pokemon.header}</h1>
                                    <p className="sub">{pokemon.meta}</p>
                                    <div className="card-bar">
                                        <div>
                                        <Button className="card-button" compact color="green">3D</Button>
                                        <Button className="card-button" compact color="blue">2D</Button> 
                                        </div>
                                        <a href='#'> 
                                        <Icon name='bitcoin' />
                                        0.000000
                                        </a>
                                    </div>
                                </div>
                             </div>
                             )
                })
            }
        </div>
        
        )
}

export default Wallet1