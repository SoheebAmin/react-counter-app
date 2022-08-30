import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";

// const element = <h1>Hello World</h1>; ----> JSX will use Babel to generate a React element from this code
// ReactDOM.render(element, document.getElementById('root')); ----> Render the element to the DOM specified by 2nd argument

const root = ReactDOM.createRoot(document.getElementById("root")); // JSX will use Babel to generate a React element from this code
root.render(<Counters />);
