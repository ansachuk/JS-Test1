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
  items: [],

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
      let { name, icon, quantity } = element;
      if (productName === name || productName === icon) {
        let currentQuantity = quantity;
        currentQuantity += 1;
        const index = this.items.indexOf(element);
        this.items.splice(index, 1, { ...element, quantity: currentQuantity });
      }
    }
  },

  decreaseQuantity(productName) {
    for (let element of this.items) {
      let { name, icon, quantity } = element;

      if (productName === name || productName === icon) {
        if (quantity > 1) {
          let currentQuantity = quantity;

          currentQuantity -= 1;
          const index = this.items.indexOf(element);
          this.items.splice(index, 1, {
            ...element,
            quantity: currentQuantity,
          });
        } else {
          cart.remove(element);
        }
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
