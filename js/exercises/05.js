const post = {
  title: "title",
  age: 21,
  isOpen: true,
};

console.log(post);

const post2 = Object.assign({}, post);

console.log(post2);

post2.isOpen = false;

console.log(post2);
