// CLOSURE means function bundles with its lexical enviroment is called closure.

function X() {
  var a = 7;

  //here c is forming closure with x
  function c() {
    a = 3;

    console.log(a);
    function d() {
      console.log(a);
    }
    return d;
  }
  console.log(a);
  return c;
}

var d = X()();
d();
X();

// Uses of closure
// - Module design pattern
// - Currying
// - Functions like once
// - Memoize
// - maintaing state in async world
// - setTimeouts
// - Iterators
// - and many mores

// Disadvantage of closure

// - overconsumption of memory
// - memory leaks
// - wont be garbage collected until program stops
