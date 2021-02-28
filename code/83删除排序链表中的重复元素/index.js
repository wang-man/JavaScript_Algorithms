/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


var deleteDuplicates = function (head) {
  let p = head;
  while (p && p.next) {
    if (p.val === p.next.val) {   // 如果与下一个相同，就删除下个
      p.next = p.next.next;       // 然后仍然从自己开始遍历
    } else {
      p = p.next;                 // 否则就开始遍历下一个
    }
  }

  return head;
};

const l = { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 3 } } } } };
// const l = { val: 1, next: { val: 2 } };
// const l = { val: 1, next: { val: 1, next: { val: 1 } } };
// const l = {};
// const l = { val: 1 };
deleteDuplicates(l)