const add = function (a, b) {
  console.log(`${this.name} score: ${a + b}`);
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

add.apply(john, [3, 4]);
add.apply(ellie, [3, 6]);
add.apply(tom, [4, 8]);
