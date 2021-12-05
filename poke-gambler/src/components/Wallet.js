import React from 'react';
import {Card, Icon, Button } from 'semantic-ui-react';

const extra = (
  <a>
    <Icon name='bitcoin' />
    0.000018
    <Button compact floated="right">Trade</Button>
    <Button compact color="green" floated="right">List</Button>
    
  </a> 
)

let cardsData = [{image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png", name: "Ditto", meta: "Normal", price: 0.00000}];


const widthStyling = ["ui stackable four column grid","ui stackable three column grid","ui stackable two column grid"]; // changes in grid width
let walletWidth = widthStyling[0]; // default is four column width
function Wallet1 (){

    const [width, setDimensions] = React.useState(window.innerWidth);
    React.useEffect(() => {
        const handleResize = () =>{ // define the what it will do when it resizes
            setDimensions(window.innerWidth);  //update innerwidth

            if(width <= 990){// check window.innerwidth and change according to px width
                walletWidth = widthStyling[2];
            }
            else if(width <= 1200){
                walletWidth = widthStyling[1];
            }
            else if (width > 1200){
                walletWidth = widthStyling[0];
            }
            
        };
        window.addEventListener("resize", handleResize); //listen for resizing
    })

    return(
        <div className={walletWidth} style ={{padding: "25px" }}>
            <div class="column"> 
                <Card
                image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                header='Ditto'
                meta='Normal'
                description='Ditto (メタモン Metamon) is a Normal-type Pokémon introduced in Generation I.'
                extra={extra}
                />
            </div>
            <div class="column">
                <Card
                    image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                    header='Ditto'
                    meta='Normal'
                    description='Ditto (メタモン Metamon) is a Normal-type Pokémon introduced in Generation I.'
                    extra={extra}
                />
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
                        <Button className="card-button" compact color="green">List</Button>
                        <Button className="card-button" compact >Trade</Button> 
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