import React, { Component } from "react";
import { HousesList } from "./Components/HousesList";
import Navbar from "./Components/Navbar";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
class App extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <div className="craig">
        <img
          src="https://blog.realestate.cornell.edu/files/2018/10/Northville-Crossing-rvb09e.jpg"
          className="img-fluid"
          width="500"
          height="600"
          alt=""
        />
        <h4> A Community Builder For Tomorrow</h4>
        <Navbar />
        <HousesList />
      </div>
    );
  }
}

export default App;
