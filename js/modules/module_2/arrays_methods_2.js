// function filterArray(numbers, value) {
//   let filteredNumbers = [];

//   for (let i = 0; i <= numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

//   return filteredNumbers;
// }

/*Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число)*/

// const arr1 = [1, 23, 12, 56, 73, 32, 54, 98, 101];
// const arr2 = [1, 41, 42, 43];
// console.log(filterArray(arr1, 41));
// console.log(filterArray(arr2, 41));

//INCLUDES

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// console.log(checkFruit("apple"));

//INCLUDES AND PUSH

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let fullArray = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       fullArray.push(array1[i]);
//     }
//   }

//   return fullArray;
//   // Change code above this line
// }

//another option

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let fullArray = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     for (let j = 0; j < array2.length; j += 1) {
//       if (array1[i] === array2[j]) {
//         fullArray.push(array2[j]);
//       }
//     }
//   }

//   return fullArray;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

/* Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).*/

// function getEvenNumbers(start, end) {
//   let array = [];

//   // Change code below this line
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }

//   return array;
//   // Change code above this line
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));

/*Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення). */

function includes(array, value) {
  for (const element of array) {
    if (element === value) {
      return true;
    }
  }
  return false;
}

// function includes(array, value) {
//   for (const element of array) {
//     return element === value ? true : false;
//   }
// }

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
);
console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
);
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
