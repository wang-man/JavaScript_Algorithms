/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let p1 = head, p2 = head;   // p1慢的指针，p2快的指针
  while (p1 && p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;    // p2走的快，所以一次走两步，总有一次它们能相遇

    if (p1 === p2) {
      return true;
    }
  }
  return false;
};

// 下面l1，l2，l3结合起来引用就形成l1环形链表：
let L1 = { val: 1, next: { val: 2 } };
let L2 = { val: 3, next: { val: 4 } };
let L3 = { val: 5 };

L1.next.next = L2;
L2.next.next = L3;
L3.next = L1;

// console.log(JSON.stringify(L1)); 
// 不能这样打印，因为JSON.stringify无法解析环形链表
// 根据这点，其实就能判断是否环形链表了。哈哈哈哈！！！！！
/*
try {
  JSON.stringify(head)
} catch{
  return true
}
*/


const result = hasCycle(L1);
console.log(result)