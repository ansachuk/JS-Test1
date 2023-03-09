const objA = {
  x: 1,
};

console.log(objA);

const objB = Object.create(objA);
objB.y = 2;

console.log(objB);

const objC = Object.create(objB);
objC.z = 3;

console.log(objC);

console.log(objC.hasOwnProperty("y"));
