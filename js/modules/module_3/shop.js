const allProducts = [
  { icon: "🍏", name: "green apple", price: 15 },
  { icon: "🍎", name: "apple", price: 20 },
  { icon: "🍐", name: "pear", price: 25 },
  { icon: "🍊", name: "orange", price: 35 },
  { icon: "🍋", name: "lemon", price: 30 },
  { icon: "🍌", name: "banana", price: 40 },
  { icon: "🍉", name: "watermelon", price: 30 },
  { icon: "🍇", name: "vine", price: 25 },
  { icon: "🍒", name: "strawberry", price: 30 },
  { icon: "🍑", name: "peech", price: 50 },
  { icon: "🥥", name: "coconut", price: 70 },
];

const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    for (let element of allProducts) {
      if (element.name === product || element.icon === product) {
        this.items.push({ ...element, quantity: 1 });
      }
    }
  },

  remove(productName) {},
  //   clear() {},
  //   countTotalPrice() {},
  //   remove(productName) {},
  //   increaseQuantity(productName) {},
  //   decreaseQuantity(productName) {},
};

cart.add("🍎");
cart.add("🍐");
cart.add("🍊");
cart.add("🍑");
console.log(cart.add("appler"));

console.table(cart.getItems());

cart.remove("🍎");
cart.remove("🍇");
cart.remove("peech");

// console.table(cart.getItems());
