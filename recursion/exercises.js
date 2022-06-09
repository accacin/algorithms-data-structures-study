/* 
  Write a function called power which accepts a base and an exponent.
  The function should return the power of the base to the exponent.
*/

function power(base, exp) {
  if (exp === 0) return 1;

  return base * power(base, exp - 1);
}

console.log("---- Power ----");
console.log(power(2, 4));

/* 
  Write a function factorial which accepts a number and returns the 
  factorial of that number.
*/

function factorial(factorThis) {
  if (factorThis === 1) return 1;

  return factorThis * factorial(factorThis - 1);
}

console.log("---- Factorial ----");
console.log(factorial(4));

/* 
  Write a function that takes an array and returns the product.
*/

function product(arr) {
  if (arr.length === 0) return 1;

  return arr[0] * product(arr.splice(1));
}

console.log("---- Product ----");
console.log(product([1, 2, 3, 4, 5]));
