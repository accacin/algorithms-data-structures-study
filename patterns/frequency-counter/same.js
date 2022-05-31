/* 
  Write a function called **same**, which accepts two arrays.
  The function should return true if every value in the 
  array has it's corresponding value squared in the same array.
  The frequency of values must be the same. 
*/

/*
  1) Restate
  Take two arrays. For each element in the first array, we should be able to find it's squared
  value in the second array.

  2 & 3) Inputs => Outputs
  [1, 2, 3] => [1, 4, 9]
  [1, 1, 2] => [1, 1, 4]

  4) Can inputs be determined from output
  Yes!

  5) Label important pieces
  input array => squared each elements => output array
*/

// This solution is O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1)
      return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// O(n) solution
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
   
  return true;
}

console.log(same2([2, 3, 1], [9, 4, 1]));
console.log(same2([1, 2, 1], [4, 4, 1]));
