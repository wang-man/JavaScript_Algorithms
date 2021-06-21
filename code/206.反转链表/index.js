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

//  题目分析：1.参数head为原链表，题目要求返回反转后的链表
// 2.链表结构{"val":"a","next":{"val":"b","next":{"val":"d","next":{"val":"c"}}}}

var reverseList = function (head) {
  let p1 = head, p2 = null;
  while (p1) {
    const next = p1.next;    // 存储剩余的链表
    p1.next = p2; // 关键一步：将p2赋到到剩余链表后面，实际这个时候p2是前一次的p1，这样就形成了反转。
    p2 = p1;    // p1再将反转后的结果赋为p2，因此p2是需要的结果
    p1 = next;    // p1变为剩余的链表节点往后继续遍历
  }
  // console.log(p1, JSON.stringify(p2))
  return p2;
};

// 测试：
const head = { "val": "a", "next": { "val": "b", "next": { "val": "d", "next": { "val": "c" } } } };
reverseList(head);
