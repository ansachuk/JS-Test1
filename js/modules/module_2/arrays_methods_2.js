function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  const newArray = firstArray.concat(secondArray);
  console.log(newArray);
  return newArray.slice(0, maxLength);

  // Change code above this line
}

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];

console.log(makeArray(arr1, arr2, 3));
console.log(makeArray(arr1, arr2, 4));
console.log(makeArray(arr1, arr2, 5));
