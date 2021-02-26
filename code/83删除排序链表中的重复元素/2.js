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


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var deleteDuplicates = function (head) {
  let list = null;
  while (head) {
    const val = head.val, next = head.next ? head.next.val : null;
    if (val === next) {
      head.next = head.next.next;
    }
    list = head;
    head = head.next;
  }
  return list
  console.log(list);
};

const l = { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 3 } } } } };
deleteDuplicates(l)