/*
  Write a function that takes an array and a number, 
  search the array for the number.

  Return -1 if the number is not found within the array.
*/

// O(n)
function search(arr, num) {
  for (let i = 0; i < arr.lenghth; i++) {
    if (arr[i] === num)
      return i;
  }

  return -1;
}

// O(log n)
function search2(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (mix <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (array[middle] < num) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}
