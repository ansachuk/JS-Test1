//ABSRACTION
// abstraction is hidden proccesing function like console.log

// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);

const repeat = (callback, n) => {
  for (let i = 0; i <= n; i += 1) {
    callback(i);
  }
};

const print = (n) => console.log(n);
const prettyPrint = (n) => console.log("Quantity of attempts: ", n);

// repeat(print, 7);
// repeat(prettyPrint, 10);
