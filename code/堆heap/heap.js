// 实现一个最小堆，并且实现它的插入功能
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
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);      // 递归
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftChildIndex(index);
    const rightIndex = this.getRightChildIndex(index);

    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);      // 递归
    }
    if (this.heap[rightIndex] < this.heap[index]) {
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

const h = new MinHeap();
h.insert(4)
h.insert(3)
h.insert(2)
h.insert(1)     // [1, 2, 3, 4]
h.pop();
console.log(h)