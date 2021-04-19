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

//  解题思路，建立两个一快一慢的两个指针，遍历这两个指针，如果这两个指针某次相同，那么就证明存在环
var hasCycle = function (head) {
  let p1 = head, p2 = head;   // p1慢的指针，p2快的指针
  while (p1 && p2 && p2.next) {    // p2.next无值的时候停止循环
    p1 = p1.next;
    p2 = p2.next.next;    // p2走的快，所以一次走两步，总有一次它们能相遇
    if (p1 === p2) {
      return true;
    }
  }
  return false;
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}


hasCycle(link)