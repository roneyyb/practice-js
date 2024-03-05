let aThreeArgumentMultiply = function (a, b, c) {
    return a * b * c;
}

// Now if this function is being called by a fixed a most of the time then
// we can create a currying function 

// 1st Way using bind
let aTwoArgumentMultiplyBy5UsingBind = aThreeArgumentMultiply.bind(this, 5);


//2nd Way using closure
let aTwoArgumentMultiplyBy5UsingClosure = function (b, c) {
    return aThreeArgumentMultiply(5, b, c);
}