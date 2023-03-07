// import { iphonesList } from "./shop-products";
// import { iphonesList as iphones } from "./shop-products";

// import { iphonesList } from "./shop.js";

const iphonesList = [
  {
    device: "Iphone",
    model: "12",
    price: 410,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2021/04/161625/black-420x420.jpg.webp",
    id: "ph-1",
  },
  {
    device: "Iphone",
    model: "11",
    price: 220,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2021/03/231643/IMG_8616%20(1)-1397x1397.jpg",
    id: "ph-2",
  },
  {
    device: "Iphone",
    model: "XR",
    price: 310,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2021/03/231704/IMG_8610%20(1)-1397x1397.jpg",
    id: "ph-3",
  },
  {
    device: "Iphone",
    model: "7 Plus",
    price: 210,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2021/03/231635/IMG_8589%20(4)-1397x1397.jpg",
    id: "ph-4",
  },
  {
    device: "Iphone",
    model: "11 Pro",
    price: 545,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2021/04/061755/IMG_6158-1397x1397.jpg",
    id: "ph-5",
  },
  {
    device: "Iphone",
    model: "7",
    price: 120,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2021/04/061734/IMG_6019%20(3)-1397x1397.jpg",
    id: "ph-6",
  },
  {
    device: "Iphone",
    model: "14 Pro Max",
    price: 1180,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2023/01/051626/deep-purple-2-1397x1397.jpg",
    id: "ph-7",
  },
  {
    device: "Iphone",
    model: "8",
    price: 170,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2021/05/281604/IMG_2672%20(1)-1397x1397.jpg",
    id: "ph-8",
  },
  {
    device: "Iphone",
    model: "7 Plus",
    price: 210,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2021/03/231635/IMG_8589%20(4)-1397x1397.jpg",
    id: "ph-9",
  },
  {
    device: "Iphone",
    model: "12 Pro",
    price: 640,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2021/05/281559/IMG_2674%20(1)-1397x1397.jpg",
    id: "ph-10",
  },
  {
    device: "Iphone",
    model: "XS",
    price: 280,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2021/03/231652/IMG_8606%20(1)-1397x1397.jpg",
    id: "ph-11",
  },
  {
    device: "Iphone",
    model: "11 Pro Max",
    price: 490,
    alt: "iphone",
    src: "https://jabko.ua/image/cache/catalog/products/2021/03/231700/IMG_8624%20(1)-1397x1397.jpg",
    id: "ph-12",
  },
];

const ipadList = [
  {
    device: "Ipad",
    model: "Air 10.9",
    price: 550,
    alt: "ipad",
    src: "https://jabko.ua/image/cache/catalog/products/2023/01/241541/MYFQ2_MM9E3-1397x1397.jpg",
    id: "pd-1",
  },
  {
    device: "Ipad",
    model: "2017",
    price: 220,
    alt: "ipad",
    src: "https://jabko.ua/image/cache/catalog/products/2023/01/241446/MP1J2%20(1)-1397x1397.jpg",
    id: "pd-2",
  },
  {
    device: "Ipad",
    model: "Pro 11",
    price: 1050,
    alt: "ipad",
    src: "https://jabko.ua/image/cache/catalog/products/2023/01/241718/MHQV3-1397x1397.jpg",
    id: "pd-3",
  },
  {
    device: "Ipad",
    model: "Mini 6",
    price: 490,
    alt: "ipad",
    src: "https://jabko.ua/image/cache/catalog/products/2023/01/261551/MK7M3%20(1)%20(1)-1397x1397.jpg",
    id: "pd-4",
  },
  {
    device: "Ipad",
    model: "2018",
    price: 230,
    alt: "ipad",
    src: "https://jabko.ua/image/cache/catalog/products/2023/01/241446/MYL92_MW742-1397x1397.jpg",
    id: "pd-5",
  },
  {
    device: "Ipad",
    model: "2018 LTE",
    price: 410,
    alt: "ipad",
    src: "https://jabko.ua/image/cache/catalog/products/2023/01/241447/MR6R2%20(1)-1397x1397.jpg",
    id: "pd-6",
  },
  {
    device: "Ipad",
    model: "Air 2022",
    price: 560,
    alt: "ipad",
    src: "https://jabko.ua/image/cache/catalog/products/2022/03/082331/ipad-air-select-wifi-purple-2022-1397x1397.jpg",
    id: "pd-7",
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
      makeCategoryMarkup(ipadList);
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
