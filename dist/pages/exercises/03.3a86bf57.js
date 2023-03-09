let c = 0;
let a = 0;
let b = 1;
let sum = 0;
const number = 4000000;
do {
    // console.log(c);
    c = a + b;
    a = b;
    b = c;
    if (c % 2 === 0) sum += c;
}while (a <= number);
console.log(sum);

//# sourceMappingURL=03.3a86bf57.js.map
