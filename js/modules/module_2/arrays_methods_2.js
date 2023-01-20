function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line

  const totalPrice = message.split(" ").length * pricePerWord;
  return totalPrice;

  // Change code above this line
}

const arr1 = "Hello";
const arr2 = "Hello and";
const arr3 = "Hello and Hi";
const arr4 = "Hello and Hi everyone";

console.log(calculateEngravingPrice(arr1, 50));
console.log(calculateEngravingPrice(arr2, 50));
console.log(calculateEngravingPrice(arr3, 50));
console.log(calculateEngravingPrice(arr4, 50));
