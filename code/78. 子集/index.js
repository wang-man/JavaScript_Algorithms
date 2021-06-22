/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 解题思路：回溯思想。
// 时间复杂度：O(2^n)
var subsets = function (nums) {
  const res = [];
  const rec = (path, l, start) => {
    if (path.length === l) {
      res.push(path);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      rec(path.concat(nums[i]), l, i + 1);
    }
  }
  for (let i = 0; i <= nums.length; i++) {
    rec([], i, 0)
  }
  console.log(res)
  return res;
};

const nums = [1, 2, 3]
subsets(nums)