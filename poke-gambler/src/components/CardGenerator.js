import React, { Component } from 'react';
import {Card, Icon, Button, Visibility } from 'semantic-ui-react';


const extra = (
    <a>
      <Icon name='bitcoin' />
      0.000018
      <Button compact floated="right">Trade</Button>
      <Button compact color="green" floated="right">List</Button>
      
    </a> 
  )

class CardGenerator extends Component{
    constructor(props){
        super(props);
        this.state = {
            image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
            header: 'Ditto',
            meta: 'Normal',
            description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        }
    }

    render(){
        return(
            <div>
                <div style={{visibility: 'visible'}}>
                    <Card
                        image={this.state.image}
                        header={this.state.header}
                        meta={this.state.meta}
                        description={this.state.description}
                        extra={extra}
                    />
                </div>
                <Button compact color="blue">Draw</Button>
            </div>
        )
    }
}

export default CardGenerator