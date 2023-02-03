const book = {
  title: "The Dark Tower:Gunslinger",
  author: "Steven King",
};

const { title, author, rating = 8.7 } = book;

console.log(title, author, rating);
console.log(
  `New book of ${author}, at name by ${title} started sales with ${rating} star at 'Tomatos'`
);
