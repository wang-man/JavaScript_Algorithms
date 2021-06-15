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
 * @return {number}
 */
var maxDepth = function (root) {
  let res = 0;
  const dfs = (n, l) => {
    if (!n) return;
    console.log(n.val, l);
    if (!n.left && !n.right) {    // 如果左右都没有节点，说明到底了，这个时候才有计算的必要
      res = Math.max(res, l);
    }
    dfs(n.left, l + 1);
    dfs(n.right, l + 1);
  }
  dfs(root, 1);
  return res;
};

const TreeNode = {
  val: 1,
  left: {
    val: 2
  },
  right: {
    val: 3,
    left: {
      val: 4,
      left: {
        val: 6,
        right: {
          val: 7
        }
      }
    },
    right: {
      val: 5
    }
  }
}

maxDepth(TreeNode)