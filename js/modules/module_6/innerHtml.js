const photos = [
  {
    src: "https://picsum.photos/200?random=1",
    alt: "1",
  },

  {
    src: "https://picsum.photos/200?random=2",
    alt: "2",
  },

  {
    src: "https://picsum.photos/200?random=3",
    alt: "3",
  },
];

const btnInnerRef = document.querySelector(".inner");
const btnInsertRef = document.querySelector(".insert");
const galleryRef = document.querySelector(".gallery");

btnInnerRef.addEventListener("click", makeGalleryInner);
btnInsertRef.addEventListener("click", makeGalleryInsert);

function makeGalleryInner() {
  const galleryMarkup = photos
    .map(({ src, alt }) => `<img src="${src}" alt="${alt}">`)
    .join("");
  galleryRef.innerHTML = galleryMarkup;
}

function makeGalleryInsert() {
  const galleryMarkup = photos
    .map(({ src, alt }) => `<img src="${src}" alt="${alt}">`)
    .join("");
  galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);
}
