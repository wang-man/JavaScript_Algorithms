
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 解题思路：将要删掉的节点的val变成它的下一个节点val，它的next指向它下一个节点的next。相当于是用下一个节点代替掉自己。
// 时间复杂度：O(1)，空间复杂度O(1);
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};


// 链表结构如下，节点顺序为a>b>d>c，现在要去掉d
const a = { val: 'a' }
const b = { val: 'b' }
const d = { val: 'd' }
const c = { val: 'c' }

a.next = b
b.next = d
d.next = c
// {"val":"a","next":{"val":"b","next":{"val":"d","next":{"val":"c"}}}}


deleteNode(d)
console.log(JSON.stringify(a))  // {"val":"a","next":{"val":"b","next":{"val":"c"}}}
console.log(JSON.stringify(d))    // ?
