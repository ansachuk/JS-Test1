// let number = 4456754;
//600851475143
const biggestDevides = function(number) {
    for(let i = 2; i < number; i += 1)if (number % i === 0) number /= i;
    return `Самый больщлй простой делитель: ${number}`;
};
// console.log(biggestDevides(9458101));
console.log(biggestDevides(600851475143)); // console.log(number);
 // console.log(i);
 //     for (let i = 2; i < number; i += 1) {
 //       if (number % i === 0) {
 //         number /= i;
 //         console.log(number);
 //         console.log(i);
 //         for (let i = 2; i < number; i += 1) {
 //           if (number % i === 0) {
 //             number /= i;
 //             console.log(number);
 //             console.log(i);
 //             for (let i = 2; i < number; i += 1) {
 //               if (number % i === 0) {
 //                 number /= i;
 //                 console.log(number);
 //               }
 //             }
 //           }
 //         }
 //       }
 //     }
 //   }
 // }

//# sourceMappingURL=04.63b9bc27.js.map
