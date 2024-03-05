Function.prototype.customBind = function (context, ...args) {
    const fn = this;
    return function (...newArgs) {
        return fn.call(context, ...[...args, ...newArgs])
    }
}