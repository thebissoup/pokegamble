import React, {Component} from 'react';
import {Card, Icon, Button } from 'semantic-ui-react';

const extra = (
  <a>
    <Icon name='bitcoin' />
    0.000018
    <Button compact floated="right">Trade</Button>
    <Button compact color="green" floated="right">List</Button>
    
  </a> 
)

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
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
                />
            </div>
            <div class="column">
                <Card
                    image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                    header='Ditto'
                    meta='Normal'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    extra={extra}
                />
            </div>
            <div class="column">
                <Card
                    image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                    header='Ditto'
                    meta='Normal'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    extra={extra}
                />
            </div>
            <div class="column">
                <Card
                    image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                    header='Ditto'
                    meta='Normal'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    extra={extra}
                />
            </div>
            <div class="column">
                <Card
                    image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                    header='Ditto'
                    meta='Normal'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    extra={extra}
                />
            </div>
        </div>
        
        )
}

export default Wallet1