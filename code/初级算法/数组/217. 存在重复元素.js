/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set(nums);
  return set.size !== nums.length;
};

var containsDuplicate2 = function (nums) {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (arr.includes(nums[i])) {
      return true;
    } else {
      arr.push(nums[i]);
    }
  }
  return false;
};

var containsDuplicate3 = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) {
      return true;
    } else {
      map.set(nums[i], true);
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));