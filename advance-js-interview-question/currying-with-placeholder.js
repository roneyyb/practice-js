
let currying = function (fn, ...args) {
    return (...newArgs) => {
        const allArgs = [...args, ...newArgs];
        // fn.length return number of named arguments in the function
        const missingArgs = fn.length - allArgs;
        if (missingArgs > 0) {
            return currying(fn, ...allArgs);
        } else {
            return fn(...allArgs)
        }
    }
}


function multiply(a, b) {
    return a * b;
}


const curriedMultiply = currying(multiply);

const multiplyByTwo = curriedMultiply(2);

console.log(multiplyByTwo(3));

const multiplyByThree = curriedMultiply(_, 3);


console.log(multiplyByThree(10))


// In the context of currying with placeholders, a placeholder is a special value that indicates where an argument should be inserted later when 
// the curried function is called.Placeholders are useful when you want to create a partially applied function with some arguments already filled
// in, but you want to leave other arguments to be provided later.

// In the example provided earlier:

// javascript

// const multiplyByThree = curriedMultiply(_, 3); // Placeholder for the first argument
// console.log(multiplyByThree(4)); // Output: 12
// Here, _ is used as a placeholder for the first argument of the curriedMultiply function. When multiplyByThree(4) is called, the curry function fills in the placeholder _ with the argument 4, resulting in a call to multiply(4, 3) and returning 12.

// Placeholders are particularly useful when you want to create reusable functions that can be specialized for different use cases by providing different arguments at different times.