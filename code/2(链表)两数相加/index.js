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

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
  // 1.直接遍历两个链表，数字两两相加
  let p1 = l1, p2 = l2, m = 0, n = '', l3 = new ListNode(0), p3 = l3;
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

    p3.next = new ListNode(n);    // 间接的赋给l3;
    console.log('p3', p3)
    console.log('l3', l3)
    p3 = p3.next;  // {},       //又重置p3

    p1 = p1 && p1.next;
    p2 = p2 && p2.next;
  }

  if (m === 1) {
    p3.next = new ListNode(m);
  }

  console.log(l3.next);
  return l3.next
};

const l1 = { val: 2, next: { val: 4, next: { val: 9 } } }
const l2 = { val: 5, next: { val: 6, next: { val: 4, next: { val: 9 } } } }

// [2,4,9]
// [5,6,4,9]
// 70401

addTwoNumbers(l1, l2)