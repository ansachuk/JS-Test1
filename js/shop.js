const navigationRef = document.querySelector("nav");
const productsListRef = document.querySelector(".products__list");

navigationRef.addEventListener("click", navClickHandler);

function navClickHandler(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  const currentcategorie = e.target.dataset.categorie;
  console.log(currentcategorie);
}

{
  /* <li class="product__item">
  <div class="product__item--wrapper">
    <img
      src="https://jabko.ua/image/cache/catalog/products/2021/04/161625/black-420x420.jpg.webp"
      alt="IPhone XR"
      width="100%"
      class="product__item--img"
    />
    <h2 class="product__item--title">Iphone XR</h2>
    <p class="product__item--price">1000$</p>
    <button type="button" class="product__item--btn">
      <svg class="product__item--icon" width="40" height="40">
        <use href=""></use>
      </svg>
    </button>
  </div>
</li>; */
}
