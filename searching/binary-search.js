/*
  Binary search

  1) The function accepts a sorted array and a value
  2) Create a left pointer at the start of the array,
      and a right pointer at the end of the array.
  3) While the left pointer comes before the right pointer:
    - Is the element equal to the middle one? Return..
    - If the value is too small, move the left pointer up.
    - If the value is too large, move the right pointer down.
    - If the value is not found, return -1.
*/

/* Big O
  Best - O(1)
  Worst/average - O(log n)
*/

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + (end - start)) / 2);

  while (arr[mid] !== value && start <= end) {
    if (value < arr[mid]) end = mid - 1;
    else start = mid + 1;
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 2) === 1);

console.log(binarySearch([1, 2, 3, 4, 5], 3) === 2);

console.log(binarySearch([1, 2, 3, 4, 5], 5) === 4);

console.log(binarySearch([1, 2, 3, 4, 5], 6) === -1);
