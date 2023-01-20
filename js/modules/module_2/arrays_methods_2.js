function findLongestWord(string) {
  const words = string.split(" ");
  let LongestWord = words[0];

  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];

    if (LongestWord.length < word.length) {
      LongestWord = words[i];
    }
  }

  return LongestWord;
}

console.log(findLongestWord("hello world uydururuywuy"));
console.log(findLongestWord("hello world sit"));
console.log(findLongestWord("hello world transaction"));
