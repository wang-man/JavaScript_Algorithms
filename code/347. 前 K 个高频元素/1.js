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
  let arr = [...map.values()].sort((a, b) => b - a);
  arr = arr.slice(0, k);
  const res = [];
  [...map].forEach((m, n) => {
    if (arr.includes(m[1])) res.push(m[0]);
  })
  console.log(res)
  return res;

};


nums = [1, 1, 3, 2, 2, 2, 2], k = 2;
topKFrequent(nums, k)