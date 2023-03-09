const values = [
    51,
    -3,
    27,
    21,
    -68,
    42,
    -37
];
const positiveValues = values.filter((value)=>value >= 0);
// console.log(positiveValues);
const negativeValues = values.filter((value)=>value < 0);
// console.log(negativeValues);
const bigValues = values.filter((value)=>value > 1000);
// console.log(bigValues);
// Оригінальний масив не змінився
console.log(values);
//unique elements
const allFruits = [
    "apple",
    "orange",
    "peach",
    "apple",
    "pear",
    "orange"
];
const uniqueFruits = allFruits.filter((fruit, index, array)=>index === array.indexOf(fruit));
console.log(uniqueFruits);

//# sourceMappingURL=filter.83ec19bd.js.map
