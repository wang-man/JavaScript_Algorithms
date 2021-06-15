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
 * @return {number[][]}
 */

//  这题是将节点按照层级来分，那么就是广度有遍历
// 解法一：广度优先遍历到每个节点时，会将它的子节点的level值加1。同层次的所有节点的level一致。
// 将节点同它所处的level一起存储在队列中。广度优先遍历的队列中的节点是按辈分排列（由浅到深，同级相连），在遍历时就可以将节点值插入到一个数组中去，因为level正好就代表节点在数组的index，用该节点的level来判断是否已经有同层级兄弟节点，有的话就插到一个这个数组中的数组，没有的话就push一个新的数组到这个数组。
// 队列q时这个样子：[[一层节点, 0], [二层节点a， 1],[二层节点b, 1], [三层节点a, 2], [三层节点b, 2], [三层节点c, 2], [三层节点d, 2], [四层节点a, 3], [四层节点b, 3]]
var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  const q = [[root, 0]];
  // q会是这个样子：
  // [[一层节点, 0], [二层节点A， 1],[二层节点B, 1], [三层节点A-1, 2], [三层节点A-2, 2], [三层节点B-1, 2], [三层节点B-2, 2], [四层节点A-1-1, 3], [四层节点A-1-2, 3]]
  while (q.length) {
    const [n, level] = q.shift();
    if (!res[level]) {      // 如果该层级节点还没有插入结果数组，那么就插入一个数组
      res.push([n.val])
    } else {                  // 否则就是遇到了兄弟节点，向同层级数组中插入
      res[level].push(n.val);
    }
    n.left && q.push([n.left, level + 1]);
    n.right && q.push([n.right, level + 1]);
  }
  console.log(res)
  return res;
};



// 方法二：既然用到了队列，那么下层节点不断入队，上层级的节点也会不断的出队。可以在上层节点全部出完后，剩下的就是下层的节点push到结果数组中就可以了。关键是怎么判断上层节点全部出队了？这个队列有个特点就是队列中最多只允许两个相邻层级的节点存在，不会多于第三个层级。因此在上一个层级节点全部出完后，队列中剩下的都是下一层的节点，此时队列的长度length就是下一层级总的节点个数了。
var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  const q = [root];
  while (q.length) {
    let len = q.length;
    res.push([]);
    while (len--) {
      const n = q.shift();
      res[res.length - 1].push(n.val);
      n.left && q.push(n.left);
      n.right && q.push(n.right);
    }
  }
  console.log(res)
  return res;
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
      },
      right: {
        val: 8,
        right: {
          val: 9
        }
      }
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

levelOrder(TreeNode)