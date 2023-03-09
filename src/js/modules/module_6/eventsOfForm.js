const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});

const textInput1 = document.querySelector(".text-input1");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  textInput1.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput1.blur();
});

textInput1.addEventListener("focus", () => {
  textInput1.value = "This input has focus";
});

textInput1.addEventListener("blur", () => {
  textInput1.value = "";
});
