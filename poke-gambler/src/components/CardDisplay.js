import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";

const CardDisplay = (props) =>{
    
    return(
        <div className="side-by-side">
            <div className="card-special">
                <div className = "image-offset"><img style={{height: 200, width: 200}} src={props.pokeData.image}/></div>
                <h1 className="name">{props.pokeData.header}</h1>
                <p className="sub">{props.pokeData.meta}</p>
                <div className="card-bar">
                    <div>
                    <Button className="card-button" compact color="green" onClick={props.to3D}>3D</Button>
                    <Button className="card-button" compact color="blue" onClick={props.to2D}>2D</Button>
                    </div>
                    <a> 
                    <Icon name='bitcoin' />
                    0.000000
                    </a>
                </div>
            </div>
        </div>
        
    )
}


export default CardDisplay