// A function which takes function as an argument or return function is called high order function.

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return radius * 2;
};

Array.prototype.calculateArea = function (logic) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

let radius = [2, 44, 5, 2];

console.log("Area ", radius.calculateArea(area));
console.log("Circumference ", radius.calculateArea(circumference));
console.log("Diameter ", radius.calculateArea(diameter));
