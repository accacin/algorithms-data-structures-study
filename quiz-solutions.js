// Write a function which takes in a string and returns counts of each character in the string

function charCount(str) {
  return str.toLowerCase().split("").reduce((acc, ch) => {
    if (!ch.match(/^[0-9a-z]+$/)) return acc;
    return { ...acc, [ch]: (acc[ch] || 0) + 1 }
  }, {});
}

console.log(charCount("hHhHhhh    !!! ello"));
