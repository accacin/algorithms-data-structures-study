/*
  Write a function called sameFrequency. Given two positive integers, 
  find out if the two numbers have the same frequency of digits.

  MUST HAVE THE COMPLEXITY O(n)!!
*/

function sameFrequency(num1, num2) {
  const lookup1 = {};
  const lookup2 = {};

  const one = num1.toString().split("");
  const two = num2.toString().split("");

  for (let digit of one) {
    lookup1[digit] = (lookup1[digit] || 0) + 1;
  }

  for (let digit of two) {
    lookup2[digit] = (lookup2[digit] || 0) + 1;
  }

  for (let key in lookup1) {
    if (!(lookup2[key])) {
      return false;
    }

    if (lookup1[key] !== lookup2[key]) {
      return false;
    }
  }

  return true;
}

console.log("======== Same Frequency ========")
console.log(sameFrequency(321, 231));
console.log(sameFrequency(22, 222))

/*
  Write a function called areThereDuplicates which accepts a variable number of argsuments, 
  and checks whether there are any duplicates within the argsuments passed in.

  Time Restriction - O(n)
  Space Restriction - O(n)
*/

function areThereDuplicates(...args) {
  // args need to be sorted
  args.sort((a, b) => a > b ? 1 : b > a ? -1 : 0);

  let i = 0;
  let j = 1;

  while (j < args.length) {
    // We only care if they are the same type
    if (args[i] === args[j]) {
      return true;
    }

    i++;
    j++;
  }
  return false;
}
