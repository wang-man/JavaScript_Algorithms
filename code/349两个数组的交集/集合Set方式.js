/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  return [...new Set(nums1)].filter(n => nums2.includes(n))
};

nums1 = [1, 2, 2, 1], nums2 = [2, 2]

console.log(intersection(nums1, nums2))