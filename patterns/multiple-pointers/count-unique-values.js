/*
  Implement a function called countUniqueValues which accepts a sorted array and counts
  the unqiue values in the array. There can be negative numers,
  but the array will always be sorted.
*/

function countUniqueValues(arr) {
  let i = 0;
  let j = 1;

  if (!arr.length)
    return 0;

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      arr[++i] = arr[j++];
    }
  }

  return (i + 1);
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
