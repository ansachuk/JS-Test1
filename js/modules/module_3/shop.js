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

// console.table(allProducts);

const cart = {
  items: [],

  getItems() {
    console.table(this.items);
  },

  add(product) {
    for (let element of allProducts) {
      if (element.name === product || element.icon === product) {
        this.items.push({ ...element, quantity: 1 });
      }
    }
  },

  remove(productName) {
    let newItems = [];
    for (let element of this.items) {
      const { name, icon } = element;
      if (productName !== name && productName !== icon) {
        // console.log(icon, name, productName !== name || productName !== icon);
        // console.log(productName !== icon);
        newItems.push(element);
        this.items = newItems;
      }
    }
  },

  clear() {
    this.items.splice(0, this.items.length);
  },

  countTotalPrice() {
    let totalPrise = 0;
    for (const element of this.items) {
      const { price, quantity } = element;
      totalPrise += price * quantity;
    }
    console.log(totalPrise);
  },

  increaseQuantity(productName) {
    for (let element of this.items) {
      const { name, icon, quantity } = element;
      if (productName === name || productName === icon) {
        quantity += 1;
        let currentQuanity = quantity;
        currentQuanity += 1;
        quantity = currentQuanity;
        this.items[{ ...element, quantity: currentQuanity }];
      }
    }
  },

  //   decreaseQuantity(productName) {},
};

cart.add("🍊");
cart.add("peech");

// cart.getItems();

cart.clear();

// cart.getItems();

cart.add("🍎");
cart.add("🍐");
cart.add("🍊");
cart.add("peech");
cart.add("coconut");
cart.add("🍇");
cart.add("watermelon");

// cart.getItems();

cart.remove("pear");
cart.remove("🍎");
cart.remove("🍇");
cart.remove("🍑");
cart.getItems();

// debugger;
cart.increaseQuantity("watermelon");

cart.getItems();

cart.countTotalPrice();
