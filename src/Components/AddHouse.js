import React, { Component } from "react";

export class AddHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houseName: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(console.log("setState triggered"));
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    );
  }
}

export default AddHouse;
