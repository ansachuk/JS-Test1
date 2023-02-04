//   array.forEach(function callback(element,index,array){body})

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

const numbers = [1, 2, 2.2, 3, 4, 5, 67, 89, 100, 234];

numbers.forEach((element, index) => {
  console.log(`Number ${element} have ${index}'s index`);
});

// console.log(Math.max(...numbers));
