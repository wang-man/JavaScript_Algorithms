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
 * @return {boolean}
 */
// 解法一：求对称，那么可以将二叉树从根节点的其中一个子树翻转，如果和另一个子树相同，就能判断是否对称。因此这一题结合了226翻转二叉树和100相同二叉树两个算法题的知识。
var isSymmetric1 = function (root) {
  // 1.翻转左子树
  const invertTreeFun = (node) => {
    if (!node) return null;   // 需要考虑没有树的时候，我擦
    return {
      val: node.val,
      left: invertTreeFun(node.right),
      right: invertTreeFun(node.left)
    }
  }
  const invertTree = invertTreeFun(root.left);
  console.log(invertTree);
  // 2.判断翻转后的左树与右子树是否相同
  const isSameTreeFun = (p, q) => {
    if (!p && !q) return true;
    if (p && q && p.val === q.val && isSameTreeFun(p.left, q.left) && isSameTreeFun(p.right, q.right)) {    // 递归
      return true;
    } else {
      return false;
    }
  }
  return isSameTreeFun(invertTree, root.right);
};


// 解法二：其实并不需要像解法一那样翻转后求相同来解决。仔细观察对称的树会发现，如果直接使用递归从根节点向下遍历，判断左节点与右节点也可以做到。（具体思路不太好描述，直接看代码）
var isSymmetric2 = function (root) {
  if (!root) return true;
  const isMirror = (l, r) => {
    if (!l && !r) return true;    // 考虑递归到了叶子节点的时候
    if (l && r && l.val === r.val && isMirror(l.left, r.right) && isMirror(l.right, r.left)) {
      return true;
    }
    return false;
  }
  return isMirror(root.left, root.right);
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  }
}

console.log(isSymmetric1(root));