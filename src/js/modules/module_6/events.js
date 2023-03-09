const list = document.querySelector("ul");
const clearLogBtn = document.querySelector('[data-action="clear"]');

clearLogBtn.addEventListener("click", reset);
document.addEventListener("keyup", logMessage);

function logMessage({ key, code }) {
  const markup = `<div class="log-item">
    <ul>

      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

  list.insertAdjacentHTML("afterbegin", markup);
}

function reset() {
  list.innerHTML = "";
}
