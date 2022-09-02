import React, { Component } from "react";

// Stateless functional component! Because it doesn't need a state, it can just be a function
// Changes from class: props is an arg, there's no render method. It can't have state.
const NavBar = (props) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Active Counters: <span>{props.totalCounters}</span>{" "}
        {/** would be this.props.totalcounters if this were a class*/}
      </a>
    </nav>
  );
};

export default NavBar;
