// make this the index.js if you want to actually run any of this in React.

// VAR VS LET:::::::::::::::::::
//In JavaScript, "var" is scoped to the function, while "let" is scoped to the block.
function VarvsLet() {
    for(var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i); // this works because i is scoped to the function, not the block.
    // change "var" to "let" and you will get an error.
}


// OBJECTS IN JS:::::::::::::::::::
//Objects are collections of key-value pairs.
const person = {
    name: 'Dude',
    printThis() {
        console.log("PRINTING THIS: " + this);
    },
    talk() {}

};
// If we know the property to access, we use dot notation.
console.log(person.name); // Dude
// If we don't know the property to access, we use bracket notation.
const propertyThatCouldBeAnything = 'name';
console.log(person[propertyThatCouldBeAnything]); // Same as person.name



// THIS IN JS:::::::::::::::::::
// "this" in JS isn't always referring to the object being called. By default it refers to the global object.
person.printThis(); // prints the object that is being called.
// An issue...
let refToFunction = person.printThis; 
console.log("ref to function: " + refToFunction); // In JS, functions are objects. This prints the function object.
// Doing //printThis() will fail because "this" outside dot notation returns global object, aka browser's window object.
// If we want to change "this" to refer to the object that is being called, we can use "bind".
refToFunction = person.printThis.bind(person); // bind changes "this" to refer to the object that is being called.


// ARROW FUNCTIONS:::::::::::::::::::
// Same function in two ways:
const square = function(x) {
    return x * x;
}
// As an arrow function, we get rid of the function keyword before and replace with an arrow after.
// Parameters are in parenthesis, but if single (like x below), they can  be removed.
// If the body has a single line, we can get rid of return and the curly braces.
const squareArrow = x =>  x * x;

// ARROW FUNCTIONS WITH A CALLBACK FUNCTION:::::::::::::::::::
// A callback function is a function that is passed to another function as an argument.
const jobs = [{ id: 1, isActive: true }, { id: 2, isActive: false }, { id: 3, isActive: true }];
// Filter out the active jobs in two ways:
const activejobs = jobs.filter(function(job) {return job.isActive;}); // regular function
const activejobsArrow = jobs.filter(job => job.isActive); // arrow function
// NOte: Arrows don't bind their own "this" value.

// MAP METHOD FOR ARRAY:::::::::::::::::::
// Map method is used to render a list of elements by applying a function to each element.
const colors = ['red', 'green', 'blue'];
const itemsRegular = colors.map(function(color) {
    return '<li>' + color + '</li>';
}); //regular function, let's convert to arrow function.
const itemsArrow = colors.map(color => '<li>' + color + '</li>');
// We can also change the concatination to a template literal (denotedb by back the backtick character).
const items = colors.map(color => `<li>${color}</li>`); 

// OBJECT DESTRUCTURING:::::::::::::::::::
// Object destructuring is used to extract values from objects.
// Let's say we have an address object with properties street, city, and country. We need to extract these values
//and assign them to variables. First, the old way:
const address = { street: '123 Main St', city: 'Anytown', country: 'USA' };
const streetOld = address.street;
const cityOld = address.city;
const countryOld = address.country;
// Now, let's use object destructuring:
const { streetNew: st, cityNew, country } = address; // Var names = property names, except if use : to rename

// SPREAD OPERATOR:::::::::::::::::::
// Spread operator is used to place an array into another array.
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second); // old way:
const combinedArrow = [...first, ...second]; // new way:
// You can also do it for objects:
const guy = { name: 'Dude', age: 30 };
const outfit = { shirt: 'red', pants: 'blue' };
const guyInOutfit = { ...guy, ...outfit, shoeSize: 12 };

// MODULES:::::::::::::::::::
// Modules are just JavaScript files to organize code. Classes are modules, for example. Modules need to be exported.
import { someClass } from './someClass.js'; //example of a class import
export class AnotherClass extends someClass{} // example of a class export