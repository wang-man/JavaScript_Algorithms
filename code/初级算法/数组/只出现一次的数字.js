/**
 * @param {number[]} nums
 * @return {number}
 */
// 这一题还有很多很多的解法，可以看解题中有人总结的出来的解法
var singleNumber = function (nums) {
  let single = null;
  while (nums.length) {
    single = nums[0];
    nums.splice(0, 1);
    const index = nums.indexOf(single);
    if (index >= 0) {
      nums.splice(index, 1);
    } else {
      return single
    }
  }
};

var singleNumber2 = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i])
    } else {
      set.add(nums[i]);
    }
  }
  return [...set][0]
};

var singleNumber3 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (!nums.slice(i + 1).includes(nums[i]) && !nums.slice(0, i).includes(nums[i])) {
      return nums[i];
    }
  }
};

var singleNumber4 = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    map.set(cur, map.get(cur) != null ? map.get(cur) + 1 : 1);
  }
  for (const k of map.keys()) {
    if (map.get(k) === 1) {
      return k;
    }
  }
};

const res = singleNumber4([2, 0, 0]);
console.log(res);