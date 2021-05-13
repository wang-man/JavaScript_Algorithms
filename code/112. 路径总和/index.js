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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let res = false;
  // 着重要理解这个递归每层节点之间的执行顺序
  const dfs = (n, sum) => {
    console.log(n.val, sum);
    if (!n.left && !n.right && sum == targetSum) res = true;   // 判断左右没有节点，必须遍历到了叶子节点
    if (n.left) dfs(n.left, sum + n.left.val);
    if (n.right) dfs(n.right, sum + n.right.val);
  }
  dfs(root, root.val);
  console.log(res);
  return res;
};



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

hasPathSum(TreeNode, 9)