/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 第一种方法
  // const arr1 = [...new Set(nums1)];             // 要唯一性，就得去重
  // const set2 = new Set(nums2);
  // const arr = arr1.filter(item => set2.has(item));      // 利用set的has方法，在filter的时候就能判断true或false
  // console.log(arr);
  // return arr;

  // 第二种方法
  const arr1 = [...new Set(nums1)];             // 要唯一性，就得去重
  const arr = arr1.filter(item => nums2.includes(item));      // 也可以利用数组得includes方法，在filter的时候就能判断true或false
  console.log(arr);
  return arr;

};

// const nums1 = [1, 2, 2, 1], nums2 = [2, 2];
const nums1 = [4, 9, 9, 4, 5], nums2 = [9, 4, 9, 8, 4];
intersection(nums1, nums2)