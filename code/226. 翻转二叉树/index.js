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
 * @return {TreeNode}
 */
// 解法一：调换left和right，然后返回这个节点，使用递归深入到子节点
var invertTree1 = function (root) {
  if (!root) return null;   // 需要考虑没有树的时候，我擦
  const rec = (node) => {
    if (!node.left && !node.right) return node;
    if (node.left) {
      node.left = rec(node.left);
    }
    if (node.right) {
      node.right = rec(node.right);
    }
    const p = node.left;
    node.left = node.right;
    node.right = p;
    return node;
  }
  return rec(root);
};

// 解法二：将外层函数本身作为递归函数，内部调换left和right位置即可，超简单的。。。。。。
var invertTree2 = function (root) {
  if (!root) return null;   // 需要考虑没有树的时候，我擦
  return {
    val: root.val,
    left: invertTree2(root.right),
    right: invertTree2(root.left)
  }
};

const root = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    val: 7,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null
    },
  }
}
console.log(invertTree1(root));


