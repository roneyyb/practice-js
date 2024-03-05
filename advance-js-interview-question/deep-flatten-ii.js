function deepFlatten(obj) {
    const isArray = Array.isArray(obj);
    const isObject = typeof obj === 'object' && obj !== null;

    if (!isArray && !isObject) {
        return [obj];
    }

    return Object.entries(obj).reduce((acc, [key, value]) => {
        const flattenedValue = deepFlatten(value);
        return acc.concat(isArray ? flattenedValue : flattenedValue.map(v => ({ [key]: v })));
    }, []);
}

// Example usage
const obj = {
    a: 1,
    b: [2, { c: 3 }, [4, 5]],
    d: { e: 6, f: [7, 8] }
};
const flattened = deepFlatten(obj);
console.log(flattened);

//[1, 2, 3, 4, 5, 6, 7, 8]