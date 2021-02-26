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
  let list = new ListNode(head.val), p = list;
  while (head) {
    const val = head.val, next = head.next ? head.next.val : null;
    if (val === next) {
      head.next = head.next.next;
    }

    p.next = head.next && new ListNode(head.next.val);
    p = p.next

    console.log(list)
    // head = p.next;
    head = head.next;
  }
  console.log(list);
};

const l = { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 3 } } } } };
deleteDuplicates(l)