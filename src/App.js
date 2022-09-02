import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // This resets all the counters by...
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  // The complex set-up here is to ensure that "counters" handle's "counter"'s data via its own state passed as props to state.
  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // array may be a clone, but objects are referenced to actual states!
    const indexOfCounter = counters.indexOf(counter); // gets the index of the counter obj in the counters array.
    counters[indexOfCounter] = { ...counter }; // This way, we are not modifying the state (this now is a different counter object).
    counters[indexOfCounter].value++;
    this.setState({ counters }); // update the state to the new counters array. Again, this is short for {counters: counters}
  };

  // This will get called by the prop "onDelete", added when mapping counters. onDelete is an event passed from counter when delete is clicked.
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        ></NavBar>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
