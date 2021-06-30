/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  /**
   * 题目要求空间复杂度为O(1),因此下面最简法不能用
   const set = new Set(nums);
   console.log(set.size);
   return set.size;

   */

  let cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== cur) {
      cur = nums[i]
    } else {
      nums.splice(i, 1);
      i = i - 1;
    }
  }
  console.log(nums);
  return nums.length;
};

removeDuplicates([1, 2, 2, 5])