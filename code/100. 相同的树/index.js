/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 解法一：凌乱的逻辑
var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  } else if (!p && q || p && !q) {
    return false;
  }
  if (p.val === q.val) {
    let res = isSameTree(p.left, q.left);
    if (res) {
      return isSameTree(p.right, q.right);
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// 解法二：判断val，并且递归的判断left及right返回的结果
var isSameTree2 = function (p, q) {
  if (!p && !q) return true;
  if (p && q && p.val === q.val && isSameTree2(p.left, q.left) && isSameTree2(p.right, q.right)) {    // 递归
    return true;
  } else {
    return false;
  }
};


const p = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null,
  }
}
const q = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null,
  }
}
console.log(isSameTree(p, q))