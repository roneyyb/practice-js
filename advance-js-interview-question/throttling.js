

const throttle = (fn, delay) => {
    let locked = false;
    return () => {
        if (!locked) {
            locked = true;
            let context = this, args = arguments;
            fn.apply(context, arguments);
            setTimeout(() => {
                locked = false;
            }, delay)
        }
    }

}