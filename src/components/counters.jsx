import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // Note: States and Prop are data of components. State is data of component private to the component, vs. prop which we give to the component and its public. Props is Read Only!

  render() {
    // we can get rid of all "this.props." by object destructing like so:
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m2">
          Reset
        </button>
        <br />
        {/** We take each counter object in state and map it to a counter component, adding props to each one*/}
        {counters.map((counter) => (
          <Counter
            // id={counter.id}
            // value={counter.value}
            // selected = {counter.selected}
            // The above 3 are the old way where each attribute is assigned from the state above. We can simply to:
            counter={counter}
            key={counter.id}
            onDelete={onDelete} // this and next is "bubbling up" the prop to the App where state is. Duplicates whats in counter..
            onIncrement={onIncrement} // ...but no need to pass the actual argument when bubbling up.
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
