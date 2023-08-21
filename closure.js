console.log("Closure is what we are studying");

// What is closure?

// Answer -> A function with its outer lexical environment is called as closure.
// When a function is exectued in different environment it remembers reference of the variable

function x() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 3000 * i);
  }
}

x();

// Output of above function is
// Closure is what we are studying
// 6
// 6
// 6
// 6
// 6
// 6

// Because when ever callback is created i is reference and variable declared with i are
// function scoped

function x() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 3000 * i);
  }
}

x();

// Output of above function is
// Closure is what we are studying
// 0
// 1
// 2
// 3
// 4
// 5

// Because when ever callback is created i is reference and here the output is different since
// let is block scoped

// How to make this work with var only

// function x() {
//   for (var i = 0; i <= 5; i++) {
//     function close(x) {
//       setTimeout(() => {
//         console.log(x);
//       }, 1000 * x);
//     }
//     close(i);
//   }
// }

// x();

function x() {
  for (var i = 0; i < 8; i++) {
    function closeureWithi(x) {
      setTimeout(() => {
        console.log(x);
      }, 1000 * x);
    }
    closeureWithi(i);
  }
}
