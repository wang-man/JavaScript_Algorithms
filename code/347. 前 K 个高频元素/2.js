/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach(num => {
    const count = map.get(num);
    if (count) {
      map.set(num, count + 1);
    } else {
      map.set(num, 1);
    }
  })
  let arr = [...map].sort((a, b) => b[1] - a[1]);
  return arr.slice(0, k).map(item => item[0]);
};


nums = [1, 1, 3, 2, 2, 2, 2], k = 2;
topKFrequent(nums, k)