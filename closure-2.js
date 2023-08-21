function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };

  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var b = new Counter();
b.incrementCounter();
b.incrementCounter();
b.incrementCounter();
b.decrementCounter();

var c = new Counter();

c.incrementCounter();

// This is scalable code
