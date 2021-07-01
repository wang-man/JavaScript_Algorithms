/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        res.push(nums1[i]);
        nums1.splice(i, 1);
        nums2.splice(j, 1);
        i--;
        j--;
      }
    }
  }
  console.log(res);
  return res;
};

var intersect2 = function (nums1, nums2) {
  const res = [];

  console.log(res);
  return res;
};

const nums1 = [4, 4], nums2 = [4, 9, 9, 4, 9, 8, 4]
intersect2(nums1, nums2);