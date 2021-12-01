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

class Wallet extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div className="ui grid stackable" style ={{padding: "25px" }}>
            <div class="four wide column"> 
                <Card
                image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                header='Ditto'
                meta='Normal'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
                />
            </div>
            <div class="four wide column">
                <Card
                    image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                    header='Ditto'
                    meta='Normal'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    extra={extra}
                />
            </div>
            <div class="four wide column">
                <Card
                    image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                    header='Ditto'
                    meta='Normal'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    extra={extra}
                />
            </div>
            <div class="four wide column">
                <Card
                    image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                    header='Ditto'
                    meta='Normal'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    extra={extra}
                />
            </div>
            <div class="four wide column">
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
}

export default Wallet