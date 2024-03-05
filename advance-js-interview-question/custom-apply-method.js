Function.prototype.apply = function (context, args) {
    const fn = this;
    const fnByThis = fn.bind(context, ...args);
    return fnByThis()

}