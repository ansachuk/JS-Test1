const theDarkTower = {
  books: [
    "The Gunslinger",
    "The Drawing of the Three",
    "The Waste lands",
    "Wizzard and Glass",
    "Wolves of the Calla",
    "Song of Susanna",
    "The Dark Tower",
  ],

  spinoffs: ["The little sisters of Eluria", "The Wind through The Keyhole"],
  author: "Stephen King",

  getAllBooks() {
    return this.books;
  },

  getBookByNumber(numberOfPart) {
    return this.books[numberOfPart - 1];
  },

  getAllSpinoff() {
    return this.spinoffs;
  },

  getAuthor() {
    return this.author;
  },
};

console.log(theDarkTower.getAllBooks());
console.log(theDarkTower.getAuthor());
console.log(theDarkTower.getAllSpinoff());

console.log(theDarkTower.getBookByNumber(4));

const fnA = function () {
  return this;
};

console.log(fnA());
