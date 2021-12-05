import React, {Component} from "react";
import { Card, Icon, Button, Image } from "semantic-ui-react";

class CardDisplay extends Component{
    constructor(props){
        super(props);

        this.state ={
         imageWidth: null,
         imageHeight:null,
         paddingLeft: null,
         paddingTop: null
        }

        this.resizeImage = this.resizeImage.bind(this);

    }
    resizeImage(image){
        let width = image.offsetWidth;
        let height = image.offsetHeight;
        this.setState({
            imageWidth: width,
            imageHeight: height,
            paddingLeft: Math.floor((290 - width)/2),
            paddingTop: Math.floor((290 - height)/2)
        })
    }
    

    
    render(){
        return(
            <div>
                <Card>
                    <Image style={{width:290, height:290, paddingLeft:this.state.paddingLeft, paddingTop:this.state.paddingTop}} wrapped ui={false}>
                        <img style={{width:this.state.imageWidth, height:this.state.imageHeight}} src={this.props.pokeData.image}/>
                    </Image>
                    <Card.Content>
                        <Card.Header>{this.props.pokeData.header}</Card.Header>
                        <Card.Meta>{this.props.pokeData.meta}</Card.Meta>
                        <Card.Description>{this.props.pokeData.description}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <div>
                        <a>
                            <Icon name='bitcoin' />
                            0.000000
                        </a>
                        <Button compact color="blue" floated="right" onClick={this.props.to2D}>2D</Button>
                        <Button compact color="green" floated="right" onClick={() => {
                            this.props.to3D();
                            this.resizeImage(document.getElementsByClassName('imagex')[0])
                            }}>3D</Button>
                    </div>
                    </Card.Content>
                </Card>
                <img className='imagex' src={this.props.pokeData.image} style={{visibility:"hidden", position: "absolute"}}></img>
            </div>
    
        )
    }
    
}

export default CardDisplay