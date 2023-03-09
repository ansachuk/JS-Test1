// const total = [2, 7, 3, 14, 6].reduce(
//   (previousValue, number) => previousValue + number,
//   0
// );
// console.log(total); // 32
const arr = [
    3,
    4,
    6,
    23,
    5,
    0
];
const reduce = arr.reduce((prev, number)=>{
    //   console.log(prev);
    return prev + number;
});
// console.log(reduce);
const students = [
    {
        name: "An",
        mark: 72
    },
    {
        name: "Masha",
        mark: 63
    },
    {
        name: "Yana",
        mark: 60
    },
    {
        name: "Eva",
        mark: 99
    },
    {
        name: "Tom",
        mark: 71
    },
    {
        name: "John",
        mark: 82
    },
    {
        name: "Steve",
        mark: 65
    },
    {
        name: "Alison",
        mark: 92
    }, 
];
const totalMarks = students.reduce((total, { mark  })=>total + mark, 0);
console.log(totalMarks / students.length);

//# sourceMappingURL=Reduce.32703add.js.map
