import React, { Component } from "react";

export class AddHouse extends Component {
  constructor(props) {
    supe(props);
    state = {
      houseName: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState([hous]);
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
        <ChildComponent count={this.state.count} />
      </div>
    );
  }
}

export default AddHouse;
