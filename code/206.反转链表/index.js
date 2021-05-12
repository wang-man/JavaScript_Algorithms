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
  let pin1 = head, pin2 = null;
  while (pin1) {
    const next = pin1.next;    // 存储剩余的链表
    pin1.next = pin2; // 关键一步：将pin2赋到到链表后面，实际这个时候pin2是前一次遍历中的pin1，这样pin1得到的值就是反转的
    pin2 = pin1;    // 再将反转后的pin1赋为pin2，因此pin2是需要的结果
    pin1 = next;    // pin1变为剩余的链表往后继续遍历
  }
  console.log(pin1, JSON.stringify(pin2))
  return pin2;
};

// 测试：
const head = { "val": "a", "next": { "val": "b", "next": { "val": "d", "next": { "val": "c" } } } };
reverseList(head);
