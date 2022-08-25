import React, { Component } from "react";

class Counter extends Component {
  // an object that contains any data the component needs.
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  pretendProduct = { id: 1 };

  // The arrow function fixes the "this" keyword to point to the object rather than the global window.
  handleIncrement = (pretendProduct) => {
    this.setState({ count: this.state.count + 1 }); // We can't just do this.state.count++ because we have get and set the state which modifies the virtual DOM.
    console.log(pretendProduct);
  };

  render() {
    // Multi-line returns in JavaScript needs parenthesis.
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <ul>
          {/* We can iterate over the tags list and generate the HTML list. Map
          takes a fallback function where each "myVarforThisCallback" is put in
          the list */}
          {this.state.tags.map((myVarforThisCallback) => (
            <li key={myVarforThisCallback}> {myVarforThisCallback} </li> // the key identifies the element in the list. If tag is object, can use tag.id
          ))}
        </ul>
        <button
          onClick={() => this.handleIncrement(this.pretendProduct)} // The arrow notation is a way to pass an argument to the function.
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
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
