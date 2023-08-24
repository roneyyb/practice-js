// https://www.youtube.com/watch?v=81NGEXAaa3Y&list=RDLVZo-6_qx8uxg&index=2

const throttle = function (callback, limit) {
  let flag = true;
  return function () {
    if (flag) {
      let context = this,
        args = arguments;
      callback.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};
