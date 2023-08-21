console.log("sport", sport);
// https://ruairidh.dev/hoisting-in-javascript/
var sport = "climbing";

const b = 3;
console.log(favouriteSport());
function favouriteSport() {
  console.log(`Before, my favourite sport was ${sport}`); // Undefined
  function a() {
    return 5;
  }
  function a() {
    return 6;
  }
  return a();
  function a() {
    return 9;
  }

  // var sport = 3;
  console.log(`Now, my favourite sport is ${sport}`, a); // Now, my favourite sport is running
}

//https://ruairidh.dev/hoisting-in-javascript/
// Hoisting is a process in the Javascript engine which does a pass through your code and allocates memory based on the presence of certain things. Hoisting is a way for us to understand how this works.

// In the Global Execution Context, there are two stages, the creation stage, and the execution stage.
// The former provides the Global Object (e.g. ‘Window’ in the browser), the this keyword, and hoisting.
// The latter is when we run our code.

// When the Javascript engine does its pass through your code,
// it looks for function declarations (but not arrow functions, or function expressions),
// and variables (excluding let or const). These are then ‘hoisted’ which allocates them space in memory.

// For every function a execution context is created and values are over written

// let and const are block scoped and var is function scoped

// const cannot be redeclared and let also cannot be redeclared

// const has to be initialized with some value while let is not required to be initialized

// function with same name can be declared again and again

// After hoisting function which is last declared will be called wont be reinitialized after memory allotmenet phase

// Function declared will take the variable from the outer environment only in order they are initializeds
