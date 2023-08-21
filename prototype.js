let arr = [3, 4, 5, 4];

let object = {
  name: "Rajat",
  city: "Mandsaur",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};

// Everything in javascript is object
// As every variable has a __proto__ property and that has __proto__ property which is null.

// To give a global function to a particular object you can use

Function.prototype.newFunction = function () {};
Object.prototype.newFunction = function () {};
Array.prototype.newFunction = function () {};
