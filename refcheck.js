//2 == 2 true
//"a" == "a" true
// "b" == "b" true

// (() => {}) === (() => {}) false
// {} == {} false
// [] == [] false

// 1. Primitive Data Types:
// JavaScript has several primitive data types, including numbers, strings, booleans, null, undefined, and symbols. When you use comparison operators with primitive data types, the comparison is based on the values of the variables.

// Equality (==) and Inequality (!=) Operators:
// The equality operator (==) compares values after performing type coercion if the operands have different types. For example, "5" == 5 will be true because the string is coerced to a number before comparison.

// Strict Equality (===) and Strict Inequality (!==) Operators:
// The strict equality operator (===) compares both value and type without performing type coercion. This is often preferred over == because it doesn't lead to unexpected results due to type conversions. For example, "5" === 5 will be false.

// Comparison (<, >, <=, >=) Operators:
// These operators work as expected, comparing the numerical values of the operands.

// 2. Non-Primitive (Object) Data Types:
// In JavaScript, objects (including arrays and functions) are reference data types. When you use comparison operators with objects, you're comparing the references (memory addresses) of the objects, not their contents.

// Equality (==) and Inequality (!=) Operators:
// For object types, the equality and inequality operators compare the references, not the actual contents of the objects. Two objects with the same content will not be considered equal using these operators unless they reference the exact same object in memory.

// Strict Equality (===) and Strict Inequality (!==) Operators:
// Just like with primitive data types, the strict equality and strict inequality operators compare both the value and the reference. Two objects with the same content will only be considered equal if they reference the same object in memory.
