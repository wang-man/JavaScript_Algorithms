/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 1.优化思路，使用字典Map。map有has方法，如果target减去数组中遍历到的那个数等同于has，那么说明他们匹配上了。这样只用到一个遍历即可

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const n2 = target - n;
    if (map.has(n2)) {          // 如果差匹配上说明就是所需那个
      return [map.get(n2), i]
    } else {
      map.set(n, i);            // 如果没有匹配上，就暂时存起来，key为数，值为下标
    }
  }
};

const nums = [2, 7, 11, -15], target = -13;
console.log(twoSum(nums, target));


