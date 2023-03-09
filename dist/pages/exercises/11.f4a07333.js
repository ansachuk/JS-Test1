const form = document.querySelector(".form");
const output = document.querySelector(".output");
const div = document.querySelector(".wraper");
form.addEventListener("submit", formClickHandler);
function formClickHandler(e) {
    e.preventDefault();
    const { elements: { name , age  } ,  } = e.target;
    output.textContent = `Hello,${name.value}.You are ${age.value} years old.`;
}
div.addEventListener("click", (e)=>{
    if (e.target.nodeName !== "BUTTON") return;
    console.log(e.target);
    console.log(e.currentTarget);
});

//# sourceMappingURL=11.f4a07333.js.map
