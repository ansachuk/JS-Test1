const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((firstb, secondb) =>
  firstb.author.localeCompare(secondb.author)
);

const sortedByReversedAuthorName = [...books].sort((firstb, secondb) =>
  secondb.author.localeCompare(firstb.author)
);

const sortedByAscendingRating = [...books].sort(
  (firstb, secondb) => firstb.rating - secondb.rating
);

const sortedByDescentingRating = [...books].sort(
  (firstb, secondb) => secondb.rating - firstb.rating
);

console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating);
console.log(sortedByDescentingRating);
