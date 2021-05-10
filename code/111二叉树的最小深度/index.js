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
var minDepth = function (root) {
  if (!root) return 0;
  const q = [[root, 1]];            // 将树与层级放一起，默认为1。
  while (q.length) {
    const [n, l] = q.shift();
    if (!n.left && !n.right) {
      // 如果没有子节点，说明到底了，直接返回当前的层级就是所需结果。为什么这个就能认定是最浅层级？因为，这里是用到的广度优先遍历，同层级兄弟节点会紧挨排列在队列q中，并且层级越浅的节点排列越靠前。从根节点找起，当一个节点遍历完会接着遍历兄弟节点。因此寻找的方式始终是横向的。那么只要其中一个节点没有子节点它就是最浅的那层。
      return l;
    }
    if (n.left) q.push([n.left, l + 1]);    // n是从队列的头部取出，越往后节点层级越深，所以l+1
    if (n.right) q.push([n.right, l + 1]);
  }
};

const TreeNode = {
  val: 1,
  left: {
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
  },
  right: {
    val: 2
  }
}

const res = minDepth(TreeNode);
console.log(res)