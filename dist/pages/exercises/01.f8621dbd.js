let price;
const product = Number(prompt("What product do you wanna buy?"));
switch(product){
    case 1:
        price = 3000;
        break;
    case 2:
        price = 1000;
        break;
    case 3:
        price = 2100;
        break;
    case 4:
        price = 1500;
        break;
    default:
        console.log("404, product not found.");
        price = 0;
}
alert(`Total price of order: ${price}$`);
let balance = prompt("Enter your payment balance:");
if (price <= balance) {
    balance -= price;
    const agree = Boolean(confirm("Are you sure?"));
    if (agree === true) alert(`Success.On your balance you have ${balance}$.Thank you for buying our products! Good luck!`);
    else alert("Order canceled( Try again...");
} else alert("Not enough credits(");

//# sourceMappingURL=01.f8621dbd.js.map
