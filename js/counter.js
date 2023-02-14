const plus = document.querySelector(".plus");
const number = document.querySelector(".number");
const minus = document.querySelector(".minus");

const counter = {
  value: 0,

  inc() {
    this.value += 1;
  },

  dec() {
    this.value -= 1;
  },

  randomColor(key) {
    switch (key) {
      case 1:
        return "red";

      case 2:
        return "blue";

      case 3:
        return "yellow";

      case 4:
        return "pink";

      case 5:
        return "green";

      case 6:
        return "teal";

      case 7:
        return "gray";

      case 8:
        return "orange";

      default:
        return "null";
    }
  },
};

minus.addEventListener("click", () => {
  if (counter.value > 0) {
    counter.dec();

    number.style.color = counter.randomColor(
      Math.round(Math.random() * (10 - 1) + 1)
    );
    number.textContent = counter.value;
  }
});

plus.addEventListener("click", () => {
  counter.inc();

  number.style.color = counter.randomColor(
    Math.round(Math.random() * (10 - 1) + 1)
  );
  number.textContent = counter.value;
});
