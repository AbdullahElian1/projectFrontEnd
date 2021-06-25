import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";
import CardColumns from 'react-bootstrap/CardColumns';

export class CardPhoto extends Component {
    render() {
        return (
            <div>
               <CardColumns>
{this.props.photo.map((item)=>{
    return(
<Card style={{ width: "18rem" }} >
          <Card.Img variant="top" src={item.url}   />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
             {item.description}
            </Card.Text>
          </Card.Body>
        </Card>
                

    )
})}
</CardColumns>  
            </div>
        )
    }
}

export default CardPhoto
