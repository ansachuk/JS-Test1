// just a function
function multiply(a, b, c) {
  let total = a * b * c;
  console.log(total);
}

multiply(2, 3, 4);

// return, unction expression and early return
const multiply1 = function (a, b, c) {
  return a * b * c;
};

console.log(multiply1(2, 3, 4));
