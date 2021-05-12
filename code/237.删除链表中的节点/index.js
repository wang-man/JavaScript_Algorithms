
// {"val":"a","next":{"val":"b","next":{"val":"d","next":{"val":"c"}}}}

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
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};


// 链表结构如下，节点顺序为a>b>d>c，现在要去掉d
const a = { val: 'a' }
const b = { val: 'b' }
const c = { val: 'c' }
const d = { val: 'd' }

a.next = b
b.next = d
d.next = c

console.log(JSON.stringify(a))
// {"val":"a","next":{"val":"b","next":{"val":"d","next":{"val":"c"}}}}


deleteNode(d)
console.log(JSON.stringify(a))
// {"val":"a","next":{"val":"b","next":{"val":"c"}}}