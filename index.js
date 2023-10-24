function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) 
      return true;
    } 
  } return false 
}

/* 
  0(n^2)
*/

/* 
  function hasTargetSum (array, targetNumber)
  for (let item equal 0; item is less than the length of the array
    plus one)
  for (let secondItem equal item plus one; secondItem is less than
    the length of the array plus one)
  if item plus secondItem strongly equal the targetNumber
  return true
  else return false

  hasTargetSum()
*/

/*
  write a function that adds any two numbers together
  in an array that will add up to a specific target number
  return true if any pair of numbers add up to the target number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  /* target = 10
     array = [1, 2, 3, 5, 5]
     5+5 = 10
     return true

     target = 11
     array = [1, 2, 3, 5, 4]
     no pairs that = 11
     return false
  */
  
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
