//Finds() like filter(), but searching only first match
const colorPickerOptions = [
    {
        label: "red",
        color: "#F44336"
    },
    {
        label: "green",
        color: "#4CAF50"
    },
    {
        label: "blue",
        color: "#2196F3"
    },
    {
        label: "pink",
        color: "#E91E63"
    },
    {
        label: "indigo",
        color: "#3F51B5"
    }, 
];
const findMatch = colorPickerOptions.find((option)=>option.color === "#3F51B5");
// console.log(findMatch);
// console.log(colorPickerOptions.find((option) => option.label === "blue"));
// console.log(colorPickerOptions.find((option) => option.label === "pink"));
// console.log(colorPickerOptions.find((option) => option.label === "white"));
// Findindex()
console.log(colorPickerOptions.findIndex((option)=>option.label === "red"));
console.log(colorPickerOptions.findIndex((option)=>option.color === "#E91E63"));
console.log(colorPickerOptions.findIndex((option)=>option.label === "white"));
console.log(colorPickerOptions.findIndex((option)=>option.label === "indigo"));

//# sourceMappingURL=Finds.c7955d78.js.map
