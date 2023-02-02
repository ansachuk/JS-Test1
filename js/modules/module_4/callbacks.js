//Callbacks it is call function in another function

var someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filter = function (array, num) {
  var filteredArray = [];
  for (const el of array) {
    if ((el, num) => el >= num) {
      filteredArray.push(el);
    }
  }
  return filteredArray;
};

console.log(filter(someArray, 3));

const fnA = (a) => a * 54;
console.log(fnA(3));
