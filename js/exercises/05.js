const obA = {
  name: "an",
  age: 20,
};
const copyA = obA;

console.log(copyA.age);

copyA.age = 21;

console.log(obA.age);

copyA.sex = "male";

console.log(obA);
