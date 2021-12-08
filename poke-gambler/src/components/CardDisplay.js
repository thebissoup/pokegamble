import React, {Component} from "react";
import {Icon, Button } from "semantic-ui-react";

class CardDisplay extends Component{
    constructor(props){
        super(props);

        this.state ={
         SpriteStyling: "sprite",
         ArStyling: "ar",
         currentStyling:"sprite"
        }
        this.arStyle = this.arStyle.bind(this);
        this.spriteStyle = this.spriteStyle.bind(this);

    }
    arStyle(){
        this.setState({
            currentStyling: this.state.ArStyling
        })
    }
    spriteStyle(){
        this.setState({
            currentStyling: this.state.SpriteStyling
        })
    }
    
    render(){
        return(
            
            <div className="side-by-side">
                <div className="card-special">
                    <div className="image-offset" >
                        <img alt="your drawn pokemon" className={this.state.currentStyling} src={this.props.pokeData.image}/>
                    </div>
                    <h1 className="name">{this.props.pokeData.header}</h1>
                    <p className="sub">{this.props.pokeData.meta}</p>
                    <div className="card-bar">
                        <div>
                        <Button className="card-button" compact color="green" onClick={() =>{
                            this.props.to3D()
                            this.arStyle();
                            }}>3D</Button>
                        <Button className="card-button" compact color="blue" onClick={() =>{
                            this.props.to2D();
                            this.spriteStyle();
                            }}>2D</Button> 
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
    
}

export default CardDisplay