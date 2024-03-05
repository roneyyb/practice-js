let deepFlatten = function (arr) {
    return arr.reduce((pv, cv) => {
        if (Array.isArray(cv)) {
            return pv.concat(deepFlatten(cv))
        } else {
            return pv.concat(cv);
        }
    }, [])
}


// Example usage
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = deepFlatten(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]