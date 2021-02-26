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
  let list = head, p = list;
  while (head) {
    const val = head.val, next = head.next ? head.next.val : null;
    if (val === next) {
      head.next = head.next.next;
    }

    p.next = head.next; // 1.让p获取新的一级
    p = p.next;     // 2.又让p指向链表的下一级.p的指针又指向list及其内部，因此能够层层更新list

    console.log(JSON.stringify(list))
    head = head.next;
  }
  return list;
};

const l = { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 3 } } } } };
deleteDuplicates(l)