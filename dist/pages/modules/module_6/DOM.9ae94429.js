console.log(document);
const body = document.body;
console.log(body);
const list = document.querySelector("#main_list");
console.log(list);
const listItems = list.children;
console.log(listItems);
let firstItem = Number(list.firstElementChild.textContent);
console.log(firstItem);
const button = document.querySelector("#button");
console.log(button.dataset.action); // button.addEventListener("click", () => {
 //   firstItem += 1;
 //   list.firstElementChild.textContent = firstItem;
 // });

//# sourceMappingURL=DOM.9ae94429.js.map
