const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions(potionName) {
    for (let potion of this.potions) {
      // if (potionName === potion.name) {
      //   return potion;
      // }
      return this.potions;
    }
  },
  addPotion(newPotion) {
    for (let potion of this.potions) {
      if (newPotion.name === potion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (const potion of this.potions) {
      const index = this.potions.indexOf(potion);
      if (potion.name === potionName) {
        return this.potions.splice(index, 1);
      }
    }

    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      const index = this.potions.indexOf(potion);
      if (potion.name === oldName) {
        potion.name = newName;
        this.potions.splice(index, 1, potion);
      }
    }
  },
  // Change code above this line
};

// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 780 }));
// console.log(atTheOldToad.getPotions("Dragon breath"));
console.table(atTheOldToad.getPotions());
// atTheOldToad.removePotion("Speed potion");
// debugger;
// atTheOldToad.updatePotionName("Dragon breath", "hui");
console.table(atTheOldToad.getPotions());
