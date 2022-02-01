function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++) {
    const complement = target - array[i]
    for(let j = i + 1; j < array.length; j++) {
      if(array[j] === complement) return true
    }
  }
}
return false
/* 
  Runtime: O(n^2)
  Space: O(n)
*/

/* 
  iterate through the array 
    for the first number, find a complementary number that adds to the target number (complement = target - number)
    iterate through the rest of the array
      check if any of the numbers added to the firs number add up to the target number
      if the two numbers add up to the target, return true
    if no two numbers add up to the target number, return false
*/

/*
  Write a function that iterates over an array and returns true if the sum of two of 
  those numbers adds up to the target number.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
