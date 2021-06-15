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
var mergeTwoLists = function (l1, l2) {
  let res = new ListNode();
  let p = res;
  let p1 = l1;
  let p2 = l2;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {          // 这里不要疑惑相等条件这样取对不对。相等的时候取p1或是p2都可以，这里就干脆取p2并不存在问题。
      p.next = p2;
      p2 = p2.next;
    }
    p = p.next;   // p指针指向下一位，p1、p2才能向后面拼接
  }
  // 只剩其中一个时候直接整个链表拼接即可。
  if (p1) {
    p.next = p1;
  }
  if (p2) {
    p.next = p2;
  }
  return res.next;    // res的第一位是声明时产生的，后面的部分才是两链表合并的结果
};

const l1 = { val: 1, next: { val: 3 } }
const l2 = { val: 2, next: { val: 4 } }
console.log(mergeTwoLists(l1, l2))