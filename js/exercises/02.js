let sum = 0;
const maxNumber = prompt("Enter your number:");

for (let i = 0; i < maxNumber; i += 1) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);
