const propertyName = "Drill";
const propertyRating = "rating";
const trackCount = 5;

const playlist = {
  name: propertyName,
  rating: 4.6,
  tracks: ["track 1", "track 2", "track 3", "track 4", "track 5"],
  trackCount,
};

// console.log(playlist);
// console.log(playlist.name);
// // Diff ways to clg same keys
// console.log(playlist.rating);
// console.log(playlist[propertyRating]);
// //
// console.table(playlist.tracks);
// console.log(playlist.trackCount);

const book = {
  name: "The Dark Tower: Gunslinger",
  author: "Steven King",
  genres: ["horor", "fantasy", "western"],
  rating: 8.9,
  pagesCount: 409,
};

const obj = { keys: {} };

obj.key1 = 1;
obj.key2 = 2;
obj.keys.key3 = 3;
obj.keys.key4 = 4;
console.log(obj);
console.log("key3" in obj.keys);
