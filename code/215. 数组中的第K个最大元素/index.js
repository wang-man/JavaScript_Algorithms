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
// 整个流程就是：未超过容量时，每次插进新的一个，就尝试向上爬到一个位置。超过容量后，如果新插入的比堆顶还小，它会先作为堆顶，然后pop方法会将其用末尾的大数踢掉，大数字再往下沉，最后堆的容量恢复，结构再次稳定。
// 时间复杂度：O(n*logK)，空间复杂度：O(k)
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

const res = findKthLargest2([2, 4, 2, 5, 8, 1, 1, 1], 5);  // 找到第n大数字
console.log(res);

