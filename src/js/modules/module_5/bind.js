const add = function (name) {
  console.log(`${name} score: ${this.a + this.b}`);
};

const john = {
  name: "John",
  a: 3,
  b: 4,
};

const ellie = {
  name: "Ellie",
  a: 3,
  b: 6,
};

const tom = {
  name: "Tom",
  a: 4,
  b: 8,
};

const calcJohn = add.bind(john);
const calcEllie = add.bind(ellie);
const calcTom = add.bind(tom);

calcJohn("John");
calcEllie("Ellie");
calcTom("Tom");
