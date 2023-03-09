const allProducts = [
  { icon: "🍏", name: "green apple", price: 15 },
  { icon: "🍎", name: "apple", price: 20 },
  { icon: "🍐", name: "pear", price: 25 },
  { icon: "🍊", name: "orange", price: 35 },
  { icon: "🍋", name: "lemon", price: 30 },
  { icon: "🍌", name: "banana", price: 40 },
  { icon: "🍉", name: "watermelon", price: 30 },
  { icon: "🍇", name: "vine", price: 25 },
  { icon: "🍒", name: "cherry", price: 30 },
  { icon: "🍑", name: "peach", price: 50 },
  { icon: "🥥", name: "coconut", price: 70 },
];

// console.table(allProducts);

const cart = {
  items: [{ icon: "🍐", name: "pear", price: 25 }],

  getItems() {
    console.table(this.items);
  },

  add(product) {
    for (let element of allProducts) {
      let { name, icon } = element;

      if (name === product || icon === product) {
        this.items.push({ ...element, quantity: 1 });
      }
    }
  },

  remove(productName) {
    let newItems = [];
    for (let element of this.items) {
      const { name, icon } = element;

      // if (productName === name && productName === icon) {
      //   items.splice(items.indexOf(element), 1);
      // }

      if (productName !== name && productName !== icon) {
        newItems.push(element);
        this.items = newItems;
      }
    }
  },

  clear() {
    this.items = [];
  },

  countTotalPrice() {
    let totalPrise = 0;
    for (const { price, quantity } of this.items) {
      totalPrise += price * quantity;
    }
    console.log(totalPrise);
  },

  increaseQuantity(productName) {
    const { items } = this;
    for (let element of items) {
      let { name, icon } = element;
      if (productName === name || productName === icon) {
        element.quantity += 1;
      }
    }
  },

  decreaseQuantity(productName) {
    for (let element of this.items) {
      let { name, icon, quantity } = element;

      if (productName === name || productName === icon) {
        if (quantity > 1) {
          element.quantity -= 1;
          return;
        }
        cart.remove(productName);
      }
    }
  },
};

cart.add("pear");
cart.add("lemon");
cart.add("watermelon");

cart.clear();

cart.add("coconut");
cart.add("cherry");
cart.add("peach");

cart.add("🍎");
cart.add("🍏");

cart.increaseQuantity("🍎");
cart.increaseQuantity("peach");
cart.increaseQuantity("peach");

cart.decreaseQuantity("apple");

cart.increaseQuantity("green apple");

cart.getItems();

cart.countTotalPrice();
