import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Counter /> <br />
        <Counter /> <br />
        <Counter /> <br />
        <Counter /> <br />
      </React.Fragment>
    );
  }
}

export default Counters;
