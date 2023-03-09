//map()
const students = [
    {
        name: "\u041C\u0430\u043D\u0433\u043E",
        score: 83
    },
    {
        name: "\u041F\u043E\u043B\u0456",
        score: 59
    },
    {
        name: "\u0410\u044F\u043A\u0441",
        score: 37
    },
    {
        name: "\u041A\u0456\u0432\u0456",
        score: 94
    },
    {
        name: "\u0425'\u044E\u0441\u0442\u043E\u043D",
        score: 64
    }, 
];
const names = students.map((element)=>element.score);
console.log(names);
//flatMap()
const studentsFlat = [
    {
        name: "\u041C\u0430\u043D\u0433\u043E",
        courses: [
            "\u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430",
            "\u0444\u0456\u0437\u0438\u043A\u0430"
        ]
    },
    {
        name: "\u041F\u043E\u043B\u0456",
        courses: [
            "\u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430",
            "\u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430"
        ]
    },
    {
        name: "\u041A\u0456\u0432\u0456",
        courses: [
            "\u0444\u0456\u0437\u0438\u043A\u0430",
            "\u0431\u0456\u043E\u043B\u043E\u0433\u0456\u044F"
        ]
    }, 
];
// const namesFlat = studentsFlat.map((student) => student.courses);
// console.log(namesFlat);
const namesFlat = studentsFlat.flatMap((student)=>student.courses);
console.log(namesFlat);

//# sourceMappingURL=fam.123f7c4c.js.map
