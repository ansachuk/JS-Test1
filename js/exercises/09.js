function changeEven(numbers, value) {
  // Change code below this line
  const newArr = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      const newNum = number + value;
      newArr.push(newNum);
    } else {
      newArr.push(number);
    }
  });
  return newArr;

  // Change code above this line
}

console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
