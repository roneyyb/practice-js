// this will throw error in console as a is not hoisted
// console.log(a);

// Temporal deadzone means time difference between a let or const is hoisted
// and initialized

// So var is attached to global scope while let and const is not
// let and const is kept in different space
// let and const can't be redeclared
// let can be left uninitialized
// const need to be initialized and its value cant be changed after words
// let can in changed after words

// Use const when ever possible
// If not const use let
// Keep var aside

// Best way to remove unexpected error is intialize everything at top
// of the program

let a = 100;
const c = 2;

// This is wrong
// c = c + 100;

// B will show special keyword undefined or placeholder
console.log(b);
var b;
{
  {
    var cd = 100;
    const df = 100;
  }

  console.log(cd);
}

console.log(cd);
// There are three error

// 1. ///

//  Uncaught ReferenceError: Cannot access 'c' before initialization
//     at const->temporal->dead->zone.js:14:13

//     console.log(c);
// let a = 100;

// 2 ///
// Uncaught ReferenceError: xx is not defined
// console.log(xx);

// 3 //
// Uncaught SyntaxError: Missing initializer in const declaration
// const c;

// 4 //
// Uncaught TypeError: Assignment to constant variable
// const c = 2;

// c = 100;
