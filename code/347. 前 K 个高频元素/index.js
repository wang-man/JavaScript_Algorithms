/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }
  // 3.交换父子节点
  swap(i1, i2) {
    // 交换两个节点
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  // 2.新节点与父节点对比，向上攀爬
  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = Math.floor((index - 1) / 2);   // 根据子节点的index获取父节点的index
    if (this.heap[parentIndex] && this.heap[parentIndex].value > this.heap[index].value) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);      // 递归
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftChildIndex(index);
    const rightIndex = this.getRightChildIndex(index);

    if (this.heap[leftIndex] && this.heap[leftIndex].value < this.heap[index].value) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);      // 递归
    }
    if (this.heap[rightIndex] && this.heap[rightIndex].value < this.heap[index].value) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);      // 递归
    }
  }
  // 1.新的节点插入到堆中
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  // 删除堆顶
  pop() {
    this.heap[0] = this.heap.pop();   // 将最后一个拿来替换头部
    this.shiftDown(0);                // 然后这个新的头部向下移动
  }
  // 获取堆顶
  peek() {
    return this.heap[0]
  }
  // 获取堆的长度
  size() {
    return this.heap.length;
  }
}

var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach(num => {
    const count = map.get(num);
    if (count) {
      map.set(num, count + 1);
    } else {
      map.set(num, 1);
    }
  })
  const minHeap = new MinHeap();
  [...map].forEach(item => {
    minHeap.insert({ key: item[0], value: item[1] });
    if (minHeap.size() > k) {
      minHeap.pop();
    }
  });
  console.log(minHeap.heap);
  return minHeap.heap.map(item => item.key);
};


nums = [1, 1, 3, 2, 2, 2, 2], k = 2;
const res = topKFrequent(nums, k);
console.log(res)