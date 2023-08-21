let name = {
  firstName: "Akshya",
  lastName: "Saini",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

name.printFullName();

var name1 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

function a() {
  return function b() {
    console.log(name1);
  };
}

//function borrowing
name.printFullName.call(name1);

let printFullName = function (a, b) {
  console.log(this.firstName + " " + this.lastName + " " + a + " " + b);
};

a()();

// function borrowing

// Call method is use to call a funciton by passing a ref which points to this
// variable inside function
printFullName.call(name1, "a", "b");

// Call method is use to call a funciton by passing a ref which points to this
// variable inside function but parameters are passed as an array
printFullName.apply(name1, ["a", "b"]);

// bind
// Bind method returns a function or copy of same funciton with ref
// and can be called at later point of time
let printMyName = printFullName.bind(name1, "Mum", "mah");
