// import { iphonesList } from "./shop-products";

const iphonesList = [
  {
    device: "Iphone",
    model: "XR",
    price: 220,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2021/04/161625/black-420x420.jpg.webp",
    id: "ph-1",
  },
  {
    device: "Iphone",
    model: "XR",
    price: 221,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2021/04/161625/black-420x420.jpg.webp",
    id: "ph-1",
  },
  {
    device: "Iphone",
    model: "XR",
    price: 222,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2021/04/161625/black-420x420.jpg.webp",
    id: "ph-1",
  },
  {
    device: "Iphone",
    model: "XR",
    price: 223,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2021/04/161625/black-420x420.jpg.webp",
    id: "ph-1",
  },
  {
    device: "Iphone",
    model: "XR",
    price: 220,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2021/04/161625/black-420x420.jpg.webp",
    id: "ph-1",
  },
  {
    device: "Iphone",
    model: "XR",
    price: 220,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2021/04/161625/black-420x420.jpg.webp",
    id: "ph-1",
  },
];

const navigationRef = document.querySelector("nav");
const productsListRef = document.querySelector(".products__list");

navigationRef.addEventListener("click", navClickHandler);

function navClickHandler(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  const currentcategorie = e.target.dataset.categorie;
  switch (currentcategorie) {
    case "iphone":
      makeCategoryMarkup(iphonesList);
      break;

    case "ipad":
      makeCategoryMarkup();
      break;

    case "macbook":
      makeCategoryMarkup();
      break;

    default:
      break;
  }
}

function makeCategoryMarkup(arr = null) {
  const markup = arr
    .map(
      ({ src, alt, device, model, price, id }) => `<li class="product__item">
  <div class="product__item--wrapper">
    <img
      src="${src}"
      alt="${alt}"
      width="100%"
      class="product__item--img"
    />
    <h2 class="product__item--title">${device} ${model}</h2>
    <p class="product__item--price">${price}$</p>
    <button type="button" class="product__item--btn" data-id="${id}">
      <svg class="product__item--icon" width="40" height="40">
        <use href=""></use>
      </svg>
    </button>
  </div>
</li>`
    )
    .join("");

  productsListRef.innerHTML = markup;
}
