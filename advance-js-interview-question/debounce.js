

const debounce = (fn, delay) => {
    let timeout;
    return function () {
        let context = this,

            //What is arguments here exactly
            args = arguments;
        clearInterval(timeout);
        timeout = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }
}