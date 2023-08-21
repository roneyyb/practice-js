a();

// Function statement
function a() {
  console.log("Function statement");
}

// Function expression

var b = function () {
  console.log("Function expression");
};

b();

// Difference between function statement and function expression is
// hoisting a can be called before its declaration
// while var cant be called


// Function Declaration is same as Function epxression

var b = function () {
  console.log("Function expression");
};

// Anonymous Function
// They does not have their own identity
// This is an error 
// Function should also have name

// This is used for declaration and expression


function () {

}



// Named Function Expression

// If you try to call xyz here then it will throw error
// since it is not described in global scope
// But is described in local scope so can be called inside the function
// 

var b = function xyz() {
    console.log("b called",xyz)
}



// Difference between parameters & Arguments ?

// Argument is what we pass and parameter is what we get

function letUnderstandparameterandargument(param) {
console.log("This is argument",param)
}
let argument = "argument"
letUnderstandparameterandargument(argumentr)

// First class functions

// Ability of function to be used as values and to pass or get returned out of function
// is called first class function
// Function can be passed as argument to another function


// Arrow Functions
