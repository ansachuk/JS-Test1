const numbers = [1, 17, 23, 2, 14, 76, 3];
const numbers1 = [2, 4, 6, 2, 14, 76];

// console.log(numbers);

const sumOfArray = function (array) {
  let sum = 0;

  for (let el of array) {
    if (el % 2 === 0) {
      sum += el;
    }
  }

  return sum;
};

console.log(sumOfArray(numbers));
console.log(sumOfArray(numbers1));
