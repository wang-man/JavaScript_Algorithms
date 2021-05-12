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
  if (!head || head.val === undefined) {
    return head;
  }
  let list = new ListNode(head.val), p = list;
  while (head) {
    const val = head.val, next = head.next ? head.next.val : null;
    if (val === next) {
      head.next = head.next.next;
    }

    if (val !== next) {
      if (next !== null) {
        p.next = new ListNode(next); // 1.让p获取下一级的next
        p = p.next;     // 2.p原本和list指向同一个链表对象，这一步赋值后p重新指向链表对象的下一级对象。结合1，p的next属性又会拿到新的下下级对象，以此循环，就层层更新了list
      }

      head = head.next;
    }
  }
  console.log('list', JSON.stringify(list))
  return list;
};

// const l = { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 3 } } } } };
// const l = { val: 1, next: { val: 2 } };
// const l = { val: 1, next: { val: 1, next: { val: 1 } } };
// const l = {};
// const l = { val: 1 };
deleteDuplicates(l)