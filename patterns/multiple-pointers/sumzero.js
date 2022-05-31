/*
  Write a function called sumZero which accepts a **sorted** array of integers.
  The function should find the first pair where the sum is zero.
  Return an array that includes both values that sum to zero of
  undefined if a pair does not exist.
*/

/*
  1) Restate
  Find a pair of integers that sum to zero. This should be possible
  in a reasonable time as the array is sorted.

  2 & 3) Inputs => Outputs
  [-3, -2, -1, 0, 1, 2, 3] = [-3, 3]

  4) Can inputs be determined from output
  Yes!

  5) Label important pieces
  pointer1, pointer2, returned tuple.
*/

// Naive
// Time - 0(n^2)
// Space - 0(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Multiple Pointers
// Time - O(n)
// Space - O(1)

function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0)
      return [arr[left], arr[right]];
    else if (sum > 0)
      right--;
    else
      left--;
  }
}
