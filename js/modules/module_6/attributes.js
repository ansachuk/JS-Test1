const photos = [
  {
    src: "https://picsum.photos/200",
    alt: "1",
  },

  {
    src: "https://picsum.photos/200",
    alt: "2",
  },

  {
    src: "https://picsum.photos/200",
    alt: "3",
  },
];

const btnCreateRef = document.querySelector(".create");
const galleryRef = document.querySelector(".gallery");

btnCreateRef.addEventListener("click", makeGallery);

function makeGallery() {
  const galleryMarkup = photos.map(({ src, alt }) => {
    const galleryItem = document.createElement("img");
    galleryItem.src = src;
    galleryItem.alt = alt;
    galleryItem.style.borderRadius = "30px";
    return galleryItem;
  });
  galleryRef.append(...galleryMarkup);
}
