//map()

const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const names = students.map((element) => element.score);
console.log(names);

//flatMap()
const studentsFlat = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];

// const namesFlat = studentsFlat.map((student) => student.courses);
// console.log(namesFlat);

const namesFlat = studentsFlat.flatMap((student) => student.courses);
console.log(namesFlat);
