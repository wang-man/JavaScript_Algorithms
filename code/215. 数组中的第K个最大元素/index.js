/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const MinHeap = require('../堆heap/minHeap');

// 解法一：最简单的排序就行了。。。。。
var findKthLargest1 = function (nums, k) {
  const arr = nums.sort((a, b) => {
    return b - a;
  })
  return arr[k - 1];
};

findKthLargest1([2, 4, 1, 5, 8, 2, 6, 3, 6], 3)


// 解法二：使用堆。。。。。
var findKthLargest2 = function (nums, k) {
  const heap = new MinHeap();
  nums.forEach(n => {
    heap.insert(n);
    if (heap.size() > k) {       // 如果插入堆后堆的长度大于k，就把堆的顶部删掉，保证只将最大的那些数字保留在堆里。
      heap.pop();
    }
  });
  console.log(heap);
  return heap.peek();   // 拿堆顶
}

const res = findKthLargest2([2, 4, 1, 5, 8, 2, 6, 3, 6], 4);  // 找到第n大数字
console.log(res);

