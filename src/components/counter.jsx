import React, { Component } from "react";

class Counter extends Component {
  // an object that contains any data the component needs.
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  render() {
    // Multi-line returns in JavaScript needs parenthesis.
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment> // render must start and end with the same tag.
      // Also, can put div instead of React.Fragment, but this saves from generating extra div
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2"; // this lets us make the class to add as a variable we can apply logic to
    classes += this.state.count === 0 ? " bg-warning" : " bg-primary"; // based on count number, different class.
    return classes;
  }

  formatCountBeforeDestructuring() {
    return this.state.count === 0 ? "Zero" : this.state.count; // We can refactor out the this.state.count into a variable.
  }

  // Note that this function is called within render() which is generating HTML, so it can return a JSX element which is an object.
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count; // Returns a string right now, but I could make it <h1>zero</h1> if I wanted.
  }
}

export default Counter; //Note: Alternatively, you can put "export default" before "class Counter";
