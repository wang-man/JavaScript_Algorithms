/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

  const map = new Map();
  nums1.forEach(n => {
    map.set(n, true);       // nums1的值放入map中，每个值映射为true。并且删除了重复值。
  })

  const arr = [];
  nums2.forEach(n => {
    if (map.get(n)) {         // nums的值作为key去查，如果是true那么就代表map中有这个数
      arr.push(n);
      map.delete(n);          // 已经得到的数就移除
    }
  })
  return arr;
};

nums1 = [1, 2, 2, 1], nums2 = [2, 2]

console.log(intersection(nums1, nums2))


// 时间复杂度：O(m+n)，因为有两个forEach
// 空间复杂度：O(m+n)，因为map和arr