import React, { Component } from "react";

class Counter extends Component {
  // an object that contains any data the component needs.
  state = {
    value: this.props.value, //value is assigned in "counters" via the map method when rendered
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  pretendProduct = { id: 1 };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 }); // We can't just do this.state.count++ because we have get and set the state which modifies the virtual DOM.
  };

  render() {
    // Multi-line returns in JavaScript needs parenthesis.
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()} // The arrow notation is a way to pass an argument to the function. Nothing passed this time.
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/** We can't "handle delete" here! Delting would modify state in "compnentS" so that's where to do it. We can pass event with "on Method" */}
        <button
          onClick={() => this.props.onDelete()} // "onDelete" is not really a function. Its a prop set in counters, which then calls "handleDelete"
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
      </React.Fragment> // render must start and end with the same tag.
      // Also, can put div instead of React.Fragment, but this saves from generating extra div
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2"; // this lets us make the class to add as a variable we can apply logic to
    classes += this.state.value === 0 ? " bg-warning" : " bg-primary"; // based on count number, different class.
    return classes;
  }

  formatCountBeforeDestructuring() {
    return this.state.value === 0 ? "Zero" : this.state.value; // We can refactor out the this.state.count into a variable.
  }

  // Note that this function is called within render() which is generating HTML, so it can return a JSX element which is an object.
  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count; // Returns a string right now, but I could make it <h1>zero</h1> if I wanted.
  }
}

export default Counter; //Note: Alternatively, you can put "export default" before "class Counter";
