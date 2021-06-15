/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */
var guess = function (num) {
  const pick = 4;
  if (pick < num) return -1;
  if (pick > num) return 1;
  if (pick === num) return 0;
}
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber1 = function (n) {
  const rec = (start, num) => {
    let mid = Math.floor((num + start) / 2);
    let res = guess(mid);
    if (res === -1) {
      num = mid;
      return rec(start, num - 1);
    } else if (res === 1) {
      return rec(mid + 1, num);
    } else {
      return mid;
    }
  }
  return rec(1, n);
};

// console.log(guessNumber1(10));
var guessNumber2 = function (n) {
  let low = 1;
  let high = n;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const res = guess(mid);
    if (res === -1) {
      high = mid - 1;
    } else if (res === 1) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
};
console.log(guessNumber2(10))
