const isDevideOnAllFromAToB = function (a, b) {
  for (let i = 1; i < 10000000000; i += 1) {
    let ok = true;
    for (let j = a; j <= b; j += 1) {
      if (i % j > 0) {
        ok = false;
        break;
      }
    }
    if (!ok) continue;
    return i;
    break;
  }

  // for (let i = a; i <= b; i += 1) {
  //   for (let j = 2; j <= 1000000000; j += 1) {
  //     if (j % i > 0) {
  //       ok = false;
  //       break;
  //     }
  //   }
  //   if (!ok) {
  //     continue;
  //   }

  //   return j;
  // }
};

console.log(isDevideOnAllFromAToB(1, 20));

//1. Make vars

//2. Make loop

//3. Make loop from 2 to 20

//4.Make if devides

//5.Return number

// function sayMyName() {
//   console.log("Haisenberg");
// }

// setTimeout(sayMyName, 3000);
