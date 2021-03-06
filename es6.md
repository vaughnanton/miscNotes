## ES6 Notes

ECMAScript is the standardized version of JS, with the goal of unifying the language's specs and features.

The most recent standardized version of is called ECMAScript 6 (ES6), released in 2015 which added features:

  - arrow functions
  - classes
  - modules
  - promises
  - generators
  - let and const

**Var/Let**

  - declaring a variable with let instead of var will throw an error if reassigned
  - when you declare a variable with let inside a block, statement, or expression...it's scope is limited to that

```
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}

console.log(printNumTwo());
// returns 2

console.log(i);
// returns "i is not defined"
```

**Const**

  - const has all the features of let, except it is read-only...they are a constant value which means
once a variable is assigned with const, it cannot be reassigned
  - usually uppercase with underscores in between

```
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error
```

  - objects, including arrays and functions that are assigned to a variable using const are still mutable, using
  - const only prevents reassignment of the variable identifier

```
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
```

**Freeze**

 - to prevent data mutation, JS provides a function Object.freeze - once the object is frozen you can't add, update, or delete properties from it

```
let obj = {
  name:"Vaughn",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; //will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed

console.log(obj);
// { name: "Vaughn", review:"Awesome"}
```

**Arrow Functions**

In JS, we often don't need to name functions...especially when passing a function as an argument to another function. We don't name these functions because we don't reuse them anywhere else.

JS:

```
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6:

```
const myFunc = () => {
  const myVar = "value";
  return myVar;
}

//when there is no function body and only a return value can simplify like so...
const myFunc = () => "value";
//will return value by default
```

**Arrow function with parameters:**

```
// doubles input value and returns it
const doubler = (item) => item * 2;
```

Vanilla:

```
var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};
```

ES6:

```
const myConcat = (arr1,arr2) => arr1.concat(arr2);
```

**Higher order arrow functions (map,filter,reduce,etc):**

Vanilla:

```
FBPosts.filter(function(post) {
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
})
```

ES6:

```
FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)
```

**Set default parameters for functions**

```
function greeting(name = "anonymous") {
  return "Hello " + name;
}
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
```

Using the rest operator allows us to create functions that take a variable number of arguments, which are stored in an array that can be accessed from inside the function

```
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
```

**Spread Operator(...)**

```
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
```

...arr unpacks the array, though it only works as an argument or array literal - following won't work:

```
const spreaded = ...arr; //will throw syntax error
```

**Destructuring to Assign Variables from Objects**

ES5:

```
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
```

ES6

```
const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
//and to store separately into a b and c...
const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54
```

**Destructuring to Assign Variables from Nested Objects**

```
const a = {
  start: { x: 5, y: 6},
  end: { x: 6, y: -9 }
};
const { start : { x: startX, y: startY }} = a;
console.log(startX, startY); // 5, 6
//variable start is assigned to value of a.start which is also an object
```

**Destructuring to Assign Variable from arrays**

```
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

const [a, b,,, c] = [1, 2, 3, 4, 5, 6]; //commas to reach the desired index
console.log(a, b, c); // 1, 2, 5
```

**Destructuring Assignment with Rest Operator to Reassign Array Elements**

```
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a,b, ...arr] = list;
    // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
```

**Template Literals**

  - a llow you to create multi line strings and to use interpolation features to create strings
  - two back ticks to wrap the string

```
const person = {
  name: "Vaughn Anton",
  age: 100
};


// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Vaughn Anton!
// I am 100 years old.
```

Write concise object literal declarations using simple fields

```
const getMousePosition = (x,y) => ({
  x: x,
  y: y
});
//can be rewritten as..
const getMousePosition = (x,y) => ({ x, y });

//Write concise declarative functions with ES6
//when defining functions within objects in ES5 we have to use the keyword function
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

//with ES6 you can remove the keyword
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

Use class syntax to define a constructor function

 - new syntax to help create objects, using the keyword 'class' - not a full fledged oop like in Java/Python/Ruby

 ```
//in ES5 we define a constructor function, and use the new keyword to instantiate an object
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

//in ES6
class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

Use getters(obtaining a value from an object) and setters(setting value of an object) to control access to an object

```
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut

//another example
function makeClass() {
  "use strict";

  class Thermostat{
    constructor(farenheit){
      this.farenheit = farenheit;
    }
    get temperature(){
      return 5 / 9 * (this.farenheit - 32);
    }
    set temperature(celsius){
      this.farenheit = celsius * 9.0 / 5 + 32;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
```

**Import and Require**

  - in the past you had to require() full files even if you needed just a certain part from those external resources
  - in ES6 we can use import and choose which parts of a module/file to load, saving time/memory

Consider the following example. Imagine that math_array_functions has about 20 functions, but I only need one, countItems.In my current file. The old require() approach would force me to bring in all 20 functions.I can bring in just the desired function, like so:

```
import { countItems } from "math_array_functions"
```

**Export**

 - in order for import to work, we must utilize export:

```
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString } //How to export functions.
export const foo = "bar"; //How to export variables.

//can also merge exports into one line
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const foo = "bar";
export { capitalizeString, foo }
```

**Import all (import *)**

  - used to import all contents into the current file

```
import * as myMathModule from "math_functions";
myMathModule.add(2,3);
myMathModule.subtract(5,3)
```

broken down into...

```
import * as object_with_name_of_your_choice from "file_path_goes_here"
object_with_name_of_your_choice.imported_function
```

**Export Default**

  - export default is used if only one value is beoing exported from a file
  - also used to create a fallback value for a file or module
  - can't use export default with var let or const

```
export default function add(x,y) {
  return x + y;
}
```

**Import a Default Export**

  - you enter the function name without curly braces

```
import add from "math_function";
add(5,4); //will return 9
```
