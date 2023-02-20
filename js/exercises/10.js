class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }

  getValue() {
    return this.value;
  }

  padEnd(str) {
    // const arr = this.value.split("");
    // arr.push(str);
    // this.value = arr.join("");

    this.value += str;
  }

  padStart(str) {
    // const arr = this.value.split("");
    // arr.unshift(str);
    // this.value = arr.join("");

    this.value = str + this.value;
  }

  padBoth(str) {
    // const arr = this.value.split("");
    // arr.push(str);
    // arr.unshift(str);
    // this.value = arr.join("");

    this.value = str + this.value + str;
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

/* 
*
Завдання 11/20

Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, який записується у властивість value об'єкта, що створюється.

Оголоси наступні методи класу:

getValue() - повертає поточне значення властивості value.

padEnd(str) - отримує параметр str (рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.

padStart(str) - отримує параметр str (рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.

padBoth(str) - отримує параметр str (рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.
*/

//    hw 5 ex 11
