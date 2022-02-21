// TODO (Ex.0): document and write tests for this function

/**
 * Given a number, returns the negative version of the number.
 * @param {number} n - input number
 * @returns {number} `n` in negative form
 */

function asNegative(n) {
  if(n<=0){
   return n; 
  } else {
    return n * -1;
  }
}

console.log("asNegative(5):", asNegative(5), "should be -5")
console.log("asNegative(0):", asNegative(0), "should be 0")
console.log("asNegative(-7):", asNegative(-7), "should be -7")

