const numbers = [1, 17, 23, 2, 14, 76, 3];
let sum = 0;

// console.log(numbers);

for (let number of numbers) {
  if (number % 2 === 0) {
    sum += number;
  }
}

console.log(sum);
