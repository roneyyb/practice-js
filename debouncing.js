// https://www.youtube.com/watch?v=Zo-6_qx8uxg&list=RDLVZo-6_qx8uxg&index=1
let counter = 0;
const getData = (m, c) => {
  //Call api
  const b = setInterval(() => {
    console.log("Set Interval");
  }, 0);
  setTimeout(() => {
    console.log("settime out");
  }, 0);

  setTimeout(() => clearInterval(b), 1000);
  const a = new Promise((resolve, reject) => {
    return resolve("Value");
  });
  console.log(a);
  console.log("Fetching data", counter++);

  console.log(m, c, "arguments");
};

const debounce = function (callback, delay) {
  let timer;

  // So anonymouse function has a property called arguments which is an array and there
  // is other things attached to that
  return function () {
    let context = this,
      args = arguments;
    console.log(context, args, "come check this");
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(context, arguments);
    }, delay);
  };
};

const betterFunction = debounce(getData, 3000, 400);
betterFunction(500, 600);

const debouncePractice = function (callback, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
};
