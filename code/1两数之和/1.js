/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const result = [];
  nums.forEach((n1, index1) => {
    if (index1 === nums.length - 1) {
      return;
    }
    const next = index1 + 1;
    nums.slice(next).forEach((n2, index2) => {
      if (n1 + n2 === target) {
        result[0] = index1;
        result[1] = next + index2;
      }
    })
  })
  return result;
};

const nums = [2, 7, 11, -15], target = -4;
console.log(twoSum(nums, target));



// 用到了两个嵌套的forEach，因此时间复杂度爆表
// 也用到了一个数组，空间复杂度不具有优势
// 在leetcode上分别值击败5%的人
