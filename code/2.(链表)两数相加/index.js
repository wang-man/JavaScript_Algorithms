/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//  链表数字正常相加即可。
// 时间复杂度：O(n)，n是较长链表长度，空间复杂度：O(n)，n也是较长链表长度
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
  // 1.直接遍历两个链表，数字两两相加
  let p1 = l1, p2 = l2, m = 0, n = null, l3 = new ListNode(0), p3 = l3;
  while (p1 || p2) {
    const v1 = p1 && p1.val || 0, v2 = p2 && p2.val || 0;
    const r = v1 + v2 + m;
    if (r >= 10) {
      n = r % 10;
      m = 1;
    } else {
      n = r;
      m = 0;
    }
    // 2.将next层层赋给l3
    p3.next = new ListNode(n);    // 1.间接的赋给l3的next
    p3 = p3.next;  // {},         // 2.再将l3的next赋给p3。p3的指针这个时候指向l3的next

    p1 = p1 && p1.next;
    p2 = p2 && p2.next;
  }

  // 3.处理最后两数相加满10的情况
  if (m === 1) {
    p3.next = new ListNode(m);
  }

  return l3.next
};

const l1 = { val: 2, next: { val: 4, next: { val: 9 } } }
const l2 = { val: 5, next: { val: 6, next: { val: 4, next: { val: 9 } } } }

// [2,4,9]
// [5,6,4,9]
// 70401

addTwoNumbers(l1, l2)