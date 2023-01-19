const numbers = [1, 17, 23, 2, 14, 76, 3];
const numbers1 = [2, 4, 6, 2, 14, 76];

// console.log(numbers);

const sumOfArray = function (array) {
  let sum = 0;

  for (let arrayItem of array) {
    if (arrayItem % 2 === 0) {
      sum += arrayItem;
    }
  }

  return sum;
};

console.log(sumOfArray(numbers));
console.log(sumOfArray(numbers1));
