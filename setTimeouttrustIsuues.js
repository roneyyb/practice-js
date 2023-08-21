console.log("Start");

setTimeout(function cb() {
  console.log("Set time out");
}, 5000);

let startDate = new Date().getTime();

let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While expires");
