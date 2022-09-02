import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // Note: States and Prop are data of components. State is data of component private to the component, vs. prop which we give to the component and its public. Props is Read Only!
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
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m2"
        >
          Reset
        </button>
        <br />
        {/** We take each counter object in state and map it to a counter component, adding props to each one*/}
        {this.state.counters.map((counter) => (
          <Counter
            // id={counter.id}
            // value={counter.value}
            // selected = {counter.selected}
            // The above 3 are the old way where each attribute is assigned from the state above. We can simply to:
            counter={counter}
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          >
            {/** any set properties (props) are accessible via this.props (except key) selected will intialize to "true" by default so can be shorted to just "selected"*/}
            <p> P is a child element of counter. Its between counter's tags</p>
            {/** any element added here will be accsible in the component via this.props.children */}
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
