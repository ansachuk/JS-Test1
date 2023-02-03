const randomNumbers = [2, 7, 123, 45, 876, 453, 1, 7];
//spread can spread array to elements

console.log(...randomNumbers); //2 – 7 – 123 – 45 – 876 – 453 – 1 – 7
console.log(Math.max(...randomNumbers)); //876

//also can concat arrays or objects

const notRandomaNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

const allNumbers = [...notRandomaNumbers, ...randomNumbers];
console.log(allNumbers); //arr(16)[]

//also spread can concat objects

const obj1 = { a: 3, b: 500 };
const obj2 = { b: 5, c: 9 };
const OBJ = {
  ...obj1, //b:500
  ...obj2, //b:5
};
console.log(OBJ); //{a: 3, b: 5, c: 9}!
