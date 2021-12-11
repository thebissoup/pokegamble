import React from 'react';
import {Icon, Button } from 'semantic-ui-react';



function Wallet1 (props){ // needs to be changed to a class component
    
    return(
        <div className=" centered grid carton-bar">
            {
                props.wallet.map( pokemon =>{
                    return( <div class="column">
                                <div key={pokemon.header} className="card-special">
                                    <div className="image-offset" >
                                        <img alt ="Ditto" className='ar' src={pokemon.gif}/>
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