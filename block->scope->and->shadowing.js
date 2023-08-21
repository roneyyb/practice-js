// Block is use to group multiple statement
// where javascript expects single statement

const c = 100;
let b = 900;

{
  // Compound Statement

  // What is shadow in javascript
  // when a variable is declared outside and also inside block
  //then block will shadow the value of outside block

  // What is illegal shadowing
  // It means a var should not cross its boundary

  var a = 10;
  let ad = 1000;
  b = 20;
  const c = 30;
  console.log(a, c);
  {
    var m = 010;
    a = 300;
    b = 100;
  }

  console.log(c, b, a);
}

console.log(a, c, b);
