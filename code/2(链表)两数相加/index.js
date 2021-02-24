/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l_1 = l1, num_1 = null;
  let l_2 = l2, num_2 = null;
  while (l_1) {
    num_1 = num_1 ? `${num_1}${l_1.val}` : l_1.val + '';
    l_1 = l_1.next;
  }
  while (l_2) {
    num_2 = num_2 ? `${num_2}${l_2.val}` : l_2.val + '';
    l_2 = l_2.next;
  }
  num_1 = Number(num_1.split('').reverse().join(''));
  num_2 = Number(num_2.split('').reverse().join(''));

  const str = (num_1 + num_2 + '').split('').reverse().join('');
  let result = null;
  let length = str.length;
  // const next = result.next;
  console.log(str);

  while (length--) {
    console.log(length);
    let last = JSON.parse(JSON.stringify(result));
    if (!result) {
      result = {};
    }
    result.val = str[length];
    result.next = last;
    console.log(result);
  }

  return result;
};

const l1 = { val: 1 }
const l2 = { val: 2 }
addTwoNumbers(l1, l2)