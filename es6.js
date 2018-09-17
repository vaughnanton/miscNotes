ECMAScript is the standardized version of JS, with the goal of unifying the language's specs and features.

The most recent standardized version of is called ECMAScript 6 (ES6), released in 2015 which added features:

  -arrow functions
  -classes
  -modules
  -promises
  -generators
  -let and const


**Var/Let**

-declaring a variable with let instead of var will throw an error if reassigned
-when you declare a variable with let inside a block, statement, or expression...it's scope is limited to that


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



**Const**

-const has all the features of let, except it is read-only...they are a constant value which means
once a variable is assigned with const, it cannot be reassigned
-usually uppercase with underscores in between

const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error


-objects, including arrays and functions that are assigned to a variable using const are still mutable, using
const only prevents reassignment of the variable identifier

const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]



**Freeze**

-to prevent data mutation, JS provides a function Object.freeze - once the object is frozen you can't add,
update, or delete properties from it

let obj = {
  name:"Vaughn",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; //will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj);
// { name: "Vaughn", review:"Awesome"}



**Arrow Functions**

In JS, we often don't need to name functions...especially when passing a function as an argument to another function. We don't
name these functions because we don't reuse them anywhere else.

in vanilla JS...

const myFunc = function() {
  const myVar = "value";
  return myVar;
}

in ES6...

const myFunc = () => {
  const myVar = "value";
  return myVar;
}

//when there is no function body and only a return value can simplify like so...
const myFunc = () => "value";
//will return value by default


Arrow function with parameters:

// doubles input value and returns it
const doubler = (item) => item * 2;

vanilla js/es6 example:

var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};

const myConcat = (arr1,arr2) => arr1.concat(arr2);


Higher order arrow functions (map,filter,reduce,etc):

vanilla js/es6 example:

FBPosts.filter(function(post) {
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
})

FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)
