import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import CardColumns from 'react-bootstrap/CardColumns';
import './CardData.css'

export class CardData extends Component {
  render() {
    return (
      <div>
        <CardColumns>
        {this.props.data.map((item,idx)=>{
          return(
        <Card style={{ width: "18rem" }} key={idx}>
          <Card.Img variant="top" src={item.imagel}   />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
             {item.description}
            </Card.Text>
            <Button variant="primary" onClick={()=>this.props.test(item.title,item.description,item.imagel)}>Add To My Photo</Button>
          </Card.Body>
        </Card>

          )
        })}
        </CardColumns>
      </div>
    );
  }
}

export default CardData;
