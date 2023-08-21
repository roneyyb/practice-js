const cart = ["shoes", "pants", "kurta"];

// the problem of callback is inversion of control as we dont know that
// create order can call it twice or will not call

// WHAT IS PROMISE?

// A Container for future value.
// Its just a placeholder

// A promise is an object that represents evantual completion of async operation

// Promise can have three state pending fullfilled and rejected

const createOrder = function () {
  const pr = new Promise((resolve, reject) => {
    const a = fetch("https://api.github.com/users/akshaymarch7");
    a.then((res) => {
      return res.json();
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.log("Error", error);
        reject(error);
      });
  });

  return pr;
};

// Example of promise chaining
createOrder()
  .then((res) => {
    console.log(res, "Inside a create order");
    return "Something";
  })
  //This catch block is response for the promise above it
  // catch can be anywhere
  .catch((error) => {})
  .then((what) => {
    console.log("What", what);
  })
  .catch((error) => {
    console.log(error, "Error here");
  });

// createOrder(cart, function (orderId) {
//   processToPayment(orderId);
// });

// //solution is that createOrder will return a promise
// // that is just an empty object
// // but after createOrder is done it will be filled with data
// const promise = createOrder(cart);

// promise
//   .then(function (orderId) {
//     processToPayment(orderId);
//   })
//   .catch((error) => {});
