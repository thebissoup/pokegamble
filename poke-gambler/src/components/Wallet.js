import React from 'react';
import {Icon, Button } from 'semantic-ui-react';


let cardsData = [{image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png", name: "Ditto", meta: "Normal", price: 0.00000}];

function Wallet1 (){


    return(
        <div className=" centered grid carton-bar">
            <div class="column">
                <div className="card-special">
                    <div className="image-offset" >
                        <img alt ="Ditto" className='sprite' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'/>
                    </div>
                    <h1 className="name">Ditto</h1>
                    <p className="sub">Normal</p>
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
            <div class="column">
                <div className="card-special">
                    <div className="image-offset" >
                        <img className='sprite' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'/>
                    </div>
                    <h1 className="name">Ditto</h1>
                    <p className="sub">Normal</p>
                    <div className="card-bar">
                        <div>
                        <Button className="card-button" compact color="green">3D</Button>
                        <Button className="card-button" compact color="blue">2D</Button> 
                        </div>
                        <a> 
                        <Icon name='bitcoin' />
                        0.000000
                        </a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div className="card-special">
                    <div className="image-offset" >
                        <img className='sprite' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'/>
                    </div>
                    <h1 className="name">Ditto</h1>
                    <p className="sub">Normal</p>
                    <div className="card-bar">
                        <div>
                        <Button className="card-button" compact color="green">3D</Button>
                        <Button className="card-button" compact color="blue">2D</Button> 
                        </div>
                        <a> 
                        <Icon name='bitcoin' />
                        0.000000
                        </a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div className="card-special">
                    <div className="image-offset" >
                        <img className='sprite' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'/>
                    </div>
                    <h1 className="name">Ditto</h1>
                    <p className="sub">Normal</p>
                    <div className="card-bar">
                        <div>
                        <Button className="card-button" compact color="green">3D</Button>
                        <Button className="card-button" compact color="blue">2D</Button> 
                        </div>
                        <a> 
                        <Icon name='bitcoin' />
                        0.000000
                        </a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div className="card-special">
                    <div className="image-offset" >
                        <img className='sprite' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'/>
                    </div>
                    <h1 className="name">Ditto</h1>
                    <p className="sub">Normal</p>
                    <div className="card-bar">
                        <div>
                        <Button className="card-button" compact color="green">3D</Button>
                        <Button className="card-button" compact color="blue">2D</Button> 
                        </div>
                        <a> 
                        <Icon name='bitcoin' />
                        0.000000
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        )
}

export default Wallet1