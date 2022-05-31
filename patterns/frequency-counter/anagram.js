/* 
  Given two strings, write a function to determine if the second string
  is an anagram of the first.
*/

/*
  1) Restate
  Take two strings, check to see if they contain the same amount of letters and instances
  of letters.

  2 & 3) Inputs => Outputs
  "dog", "dog" => true
  "woman", "man" => false

  4) Can inputs be determined from output
  Yes!

  5) Label important pieces
  string1, string2, result
*/

// O(n) solution
function anagram(str1, str2) {
  if (str1.length !== str2.length)
    return false;

  let count1 = {};
  let count2 = {};

  for (let ch of str1) {
    count1[ch] = (count1[ch] || 0) + 1;
  }

  for (let ch of str2) {
    count2[ch] = (count2[ch] || 0) + 1;
  }

  for (let key in count1) {
    if (!(key in count2)) {
      return false;
    }

    if (count1[key] !== count2[key]) {
      return false;
    }
  }

  return true;
}

// O(n) solution
function anagram2(str1, str2) {
  if (str1.length !== str2.length)
    return false;

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(anagram("dog", "god"));
console.log(anagram("woman", "man"));
console.log(anagram("dog", "gop"));
