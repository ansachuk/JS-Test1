// every() return true if every elelment match test of callback
const fruits = [
    {
        name: "apple",
        quantity: 3
    },
    {
        name: "pear",
        quantity: 4
    },
    {
        name: "peach",
        quantity: 1
    },
    {
        name: "coconut",
        quantity: 0
    },
    {
        name: "watermelon",
        quantity: 1
    },
    {
        name: "orange",
        quantity: 2
    }, 
];
console.log(fruits.every((fruit)=>fruit.quantity > 0));
// some() return true if even one element match test callback
console.log(fruits.some((fruit)=>fruit.quantity === 0));

//# sourceMappingURL=Every_some.4f498005.js.map
