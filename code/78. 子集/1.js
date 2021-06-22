/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 解题思路：经过观察，数组中每个数字都会和其后面的数字相拼接，拼接后的结果又会和后面数字相拼接，那么显然是递归+遍历。
// 时间复杂度为O(2^n)。2的n次方。
var subsets = function (nums) {
  const res = [[]];
  const rec = (head, list) => {
    for (let i = 0; i < list.length; i++) {
      console.log(list)
      res.push(head.concat(list[i]));
      rec(head.concat(list[i]), list.slice(i + 1, list.length));
    }
  }
  rec([], nums);
  // console.log(res)
  return res;
};

const nums = [1, 2, 3, 4]
subsets(nums)