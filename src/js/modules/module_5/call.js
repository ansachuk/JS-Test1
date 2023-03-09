const greet = function () {
  console.log(`Welcome ${this.name}!`);
};

const john = {
  name: "John",
};

const ellie = {
  name: "Ellie",
};

const tom = {
  name: "Tom",
};

greet.call(john);
greet.call(ellie);
greet.call(tom);
