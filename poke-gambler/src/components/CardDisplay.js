import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";

const CardDisplay = (props) =>{
    
    return(
        <Card
        image={props.pokeData.image} 
        header={props.pokeData.header}
        meta={props.pokeData.meta}
        description={props.pokeData.description}
        extra={(
            <div>
                <a>
                    <Icon name='bitcoin' />
                    0.000000
                    
                </a>
                <Button compact color="blue" floated="right" onClick={props.to2D}>2D</Button>
                <Button compact color="green" floated="right" onClick={props.to3D}>3D</Button>
            </div>
          )}
        />
    )
}


export default CardDisplay