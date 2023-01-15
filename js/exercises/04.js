let number = 600851475143;

for (let i = 2; i < number; i += 1) {
  if (number % i === 0) {
    number /= i;
    console.log(number);
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        number /= i;
        console.log(number);
        for (let i = 2; i < number; i += 1) {
          if (number % i === 0) {
            number /= i;
            console.log(number);
          }
        }
      }
    }
  }
}
