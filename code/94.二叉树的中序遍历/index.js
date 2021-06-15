/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//  递归版：就是使用中序遍历的方式
// var inorderTraversal = function (root) {
//   if (!root) return [];
//   const res = [];
//   const getVal = (root) => {
//     if (!root) return;
//     getVal(root.left);
//     res.push(root.val);
//     getVal(root.right);
//   }
//   getVal(root);
//   console.log(res)
//   return res;
// };

// 迭代版:
var inorderTraversal = function (root) {
  if (!root) return [];
  const res = [];
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    res.push(n.val);
    p = n.right;
  }
  console.log(res)
  return res;

}

const TreeNode = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 4,
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 2,
    left: {
      val: 10,
      right: {
        val: 11
      }
    }
  }
}

inorderTraversal(TreeNode)
