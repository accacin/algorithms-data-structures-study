/*
  PSUEDO-CODE
  1) Loop over every character in the longer string
  2) Loop over every character in the shorted sting
  3) If the chars don't match, break out of inner loop
  4) If they do match, keep going
  5) If you complete the inner loop and find a match, increment
      the number of matches
  6) Return the count
*/

function naiveSearch(str1, str2) {
  let matches = 0;

  for (let i; i < str1.length; i++) {
    for (let j; j < str2.length; j++) {
      if (str1[i] !== str2[i + j]) break;
      if (j === str2.length - 1) count++;
    }
  }

  return matches;
}

//console.log(naiveSearch("omgomgomg", "omg") === 3);
console.log(naiveSearch("ozz", "omg") === 0);
