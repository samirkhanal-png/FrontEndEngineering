/*
# JavaScript Objects and Object Methods Tutorial

## Introduction to Objects

In JavaScript, an object is a collection of properties, where each property is defined as a key-value pair. Objects are fundamental to JavaScript and are used to store data and more complex entities.
*/

// Creating Objects

// 1. Object Literal Syntax
var obj1 = {}; // Creates an empty object

// 2. Using the new Object() Constructor
var obj2 = new Object(); // Creates an empty object

// 3. Using Object.create()
var obj3 = Object.create(null); // Creates an object with no prototype

/*
## Accessing Object Properties

You can access properties of an object using two methods:
*/

// 1. Dot Notation
var person = { name: "Alice", age: 25 };
console.log(person.name); // Output: Alice

// 2. Bracket Notation
console.log(person["age"]); // Output: 25

/*
## Adding and Modifying Properties

You can add or modify properties of an object using dot notation or bracket notation.
*/

var car = { brand: "Toyota", model: "Camry" };
car.year = 2020; // Adding a new property
car.model = "Corolla"; // Modifying an existing property

/*
## Checking for Properties

To check if an object has a specific property, you can use:
*/

// 1. hasOwnProperty() Method
console.log(person.hasOwnProperty("name")); // Output: true

// 2. in Operator
console.log("age" in person); // Output: true

/*
## Object Methods

JavaScript provides several built-in methods for working with objects:
*/

// 1. Object.keys() - Returns an array of a given object's own property names.
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj); // Output: ['a', 'b', 'c']
console.log(keys);

// 2. Object.assign() - Copies the values of all enumerable properties from one or more source objects to a target object.
const target = { a: 1 };
const source = { b: 2, c: 3 };
const returnedTarget = Object.assign(target, source); // target is now { a: 1, b: 2, c: 3 }
console.log(returnedTarget);

// 3. Destructuring Assignment - Allows unpacking values from arrays or properties from objects into distinct variables.
const { a, b } = obj; // a = 1, b = 2
console.log(a, b); // Output: 1 2