// const target = prompt("Enter any number");

const sumOfAllNumbers = function (target) {
  let sum = 0;

  for (let i = 0; i <= target; i += 1) {
    sum += i;
  }

  return sum;
};

console.log(sumOfAllNumbers(prompt("Enter any number")));
