//1.vars
let number = 600851475143;

for (let i = number - 1; i > 1; i -= 1) {
  if (number % i === 0) {
    number = i;
    for (let j = number; j > 1; j -= 1) {
      if (number % j !== 0) {
        console.log(number);
        break;
      }
    }
  }
}
//2.Знайти прості дільники
//3.
