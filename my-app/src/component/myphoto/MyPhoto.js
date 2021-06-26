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

    //this function to delete the image from the database that the user choose 
    deletePhoto= async (index)=>{
         let email='abodelian28@gmail.com';
        // let url=`http://localhost:3010/deletephoto/${index}&email=${email}`;
        // axios.get(url).then((result)=>{
        //     this.setState({
        //         data:result.data
        //     })
        // });

        const userName = {
            email: email
          }
          let result = await axios.delete(`http://localhost:3010/deletephoto/${index}`, { params: userName })
          this.setState({
            data: result.data
          })
      
        }
      
        

    

    //this function to render the image from the database that the user choose 
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
                <CardPhoto photo={this.state.data} deletePhoto={this.deletePhoto}/>
                
                
            </div>
        )
    }
}

export default MyPhoto
