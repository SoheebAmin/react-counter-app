import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // Note: States and Prop are data of components. State is data of component private to the component, vs. prop which we give to the component and its public. Props is Read Only!
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 4 },
    ],
  };
  // This will get called by the prop "onDelete", added when mapping counters. onDelete is an event passed from counter when delete is clicked.
  handleDelete = () => {
    alert("Deleted!");
  };

  render() {
    return (
      <React.Fragment>
        {/** We take each counter object in state and map it to a counter component, adding props to each one*/}
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected={true}
            onDelete={this.handleDelete}
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
