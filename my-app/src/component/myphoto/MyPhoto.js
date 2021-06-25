import React, { Component } from 'react';
import CardPhoto from './CardPhoto';
import axios from 'axios';

export class MyPhoto extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount =async () => {
        
        let email = 'abodelian28@gmail.com';
        let url = `http://localhost:3010/getphoto?email=${email}`;
        axios.get(url).then((photoResult) => {
          let photoData = photoResult.data;
          this.setState({
            data: photoData,
          })
          console.log(this.state.data);
        })
      }
    render() {
        return (
            <div>
                <CardPhoto photo={this.state.data}/>
                
                
            </div>
        )
    }
}

export default MyPhoto
