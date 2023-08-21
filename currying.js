// What Is Currying in JavaScript?
// Currying in JavaScript transforms a function
// with multiple arguments into a nested series of functions, each taking a single argument.
// Currying helps you avoid passing the same variable multiple times, and
//  it helps you create a higher order function.
let multiply = function (a, b) {
  console.log(a * b);
};

let multiplyByTwo = multiply.bind(this, 2);

multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 2);

multiplyByThree(5);

// Function currying with closure

let multiplyNext = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyBy3 = multiplyNext(3);

multiplyBy3(7);
