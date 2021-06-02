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
    if (this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[index].val) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);      // 递归
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftChildIndex(index);
    const rightIndex = this.getRightChildIndex(index);

    if (this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[index].val) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);      // 递归
    }
    if (this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[index].val) {
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
    if (this.size() === 1) return this.heap.shift(); // 如果只有一个节点就直接返回它
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();   // 将最后一个拿来替换头部
    this.shiftDown(0);                // 然后这个新的头部向下移动，堆又回归为正常顺序
    return top;     // 这里需要返回头部
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


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var mergeKLists = function (lists) {
  const res = new ListNode(0);  // 1.先建立一个最小的链表
  let p = res;                  // 2. 建立一个指针p，先指向这个链表
  const h = new MinHeap();      // 3.实例化出一个最小堆
  lists.forEach(l => {          // 4.遍历链表数组，将链表按第一个节点的val大小放入最小堆中排序。这个时候只是排的每个链表，并不是其节点
    if (l) h.insert(l);
  });
  console.log(h.heap);
  while (h.size()) {
    const n = h.pop();    // 拿到初始堆中的头部链表。因此n的首个val必定是最小的。
    p.next = n;           // 结果链表拼接一次(第一次执行这里的时候，next指向为{val:1}，以后执行到这里都会从最小的开始)
    p = p.next;           // p又变成了这个头部链表
    if (n.next) h.insert(n.next);   // 然后将头部链表的next部分又插入堆中排序
  }
  console.log(res.next);
  return res.next;
};

const lists = [
  { val: 1, next: { val: 4, next: { val: 5, next: null } } },
  { val: 1, next: { val: 3, next: { val: 4, next: null } } },
  { val: 2, next: { val: 6, next: null } }
]
mergeKLists(lists);