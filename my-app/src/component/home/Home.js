import React, { Component } from 'react'
import InputForm from './InputForm'
import axios from 'axios';
export class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            photoData:[]
        }
    }
    //localhost:3010/photo?photoName=london
    

        // updatePhotName = (e)=>{
        //     this.setState({
        //       catName : e.target.value
        //     })
        //   }
    
    explore = async (event) => {
        event.preventDefault();
        try {
            let photoName = event.target.photo.value;
            console.log(photoName);
            let url = `localhost:3010/photo?photoName=${photoName}`;
            let photoResult = await axios.get(url);
            this.setState({
                photoData: photoResult.data,
                    })
            console.log(this.state.photoData);


        }

        catch {

            console.log('wrong');

        }


    }
    render(){



        return (
            <div>
                <InputForm getPhoto={this.explore}/>


            </div>
        )
    }
}

export default Home
