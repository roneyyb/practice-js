const ar2 = [1, 3, 4, 4];

const transFormedArrWithMap = ar2.map((a) => a * 2);

const transFormedArrWithFilter = ar2.filter((a) => a % 2 != 0);

const transFormedArrWithReduce = ar2.reduce((pv, cv) => pv + cv, 0);

console.log('Transform Map', transFormedArrWithMap);

console.log('Filter', transFormedArrWithFilter);

console.log('Tran Reduce', transFormedArrWithReduce);

Array.prototype.mapReduce = function (logic, prev) {
  let total = prev;
  for (let i = 0; i < this.length; i++) {
    total = logic(total, this[i]);
  }
  return total;
};

console.log(ar2.mapReduce((pv, cv) => pv + cv, 0));
