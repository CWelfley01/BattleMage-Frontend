import React, { Component } from "react";
import axios from "axios";

export default class GetElements extends Component {
  constructor(props) {
    super(props);

    this.listElements = this.listElements.bind(this);
  }
  listElements = () => {
    axios
      .get("https://caw-capstone.herokuapp.com/Element")
      .then((response) => console.log(response.data[0]))
      .catch((error) => console.error(error))
    };
  render() {
    

    return <div>{this.listElements()}</div>;
  }
}
