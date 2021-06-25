import React, { Component } from "react";
import InputForm from "./InputForm";
import axios from "axios";
import CardData from './CardData';
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      photoData: [],
    };
  }

  searchPhoto = async (event) => {
    event.preventDefault();
    try {
      let photoName = event.target.photo.value;
      console.log(photoName);
      let url = `http://localhost:3010/photo?photoName=${photoName}`;
      let photoResult = await axios.get(url);
      this.setState({
        photoData: photoResult.data,
        name: photoName,
      });
      console.log(photoResult.data);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div>
        <InputForm getPhoto={this.searchPhoto} />
        <CardData data={this.state.photoData}/>
      </div>
    );
  }
}

export default Home;
