/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
// 这一题要干什么？就是给定一个图，去深拷贝克隆它。
// 图的节点之间的连接关系类似链表，每个节点都在它上一个节点的neighbors数组中形成嵌套。因此不是简单的JSON.parse(JSON.stringyfy)能解决的
// 这一题的难点在哪里。1：怎么拷贝一个节点，比如参数这个节点。2：怎么拷贝这个节点的邻居节点，实现所有节点的拷贝
// 解决问题。1: 使用new Node以参数node来创建它的拷贝结果，实现了第一个节点的拷贝。2：因为邻居节点放在neighbors数组中，那么遍历这个数组，使用递归，以邻居节点为模板又创建新的节点，就可以将邻居节点也依次拷贝。然后将邻居节点push进该节点的neighbors中，就形成了图关系。
var cloneGraph = function (node) {
  console.log(node);
  if (!node) return;
  const visited = new Map();
  const dfs = (n) => {
    const nCopy = new Node(n.val);   // 以给的参数作为模板去创建节点，邻居为空。这个节点就是n自己的克隆。
    visited.set(n, nCopy);            // 以n为键存储克隆n节点的自己节点
    (n.neighbors || []).forEach(nei => {  // 遍历邻居，递归
      if (!visited.has(nei)) {            // 已经遍历过的就跳过，否则会死循环
        dfs(nei);     // 重复，每个节点的邻居节点的邻居节点都将被遍历到，直至全部遍历完
      }
      nCopy.neighbors.push(visited.get(nei)); // 向nCopy的邻居中插入参数节点的邻居，这一步完成了邻居节点的克隆。nei经上一行的递归，已经存放在visited里了
    });
  }

  dfs(node);
  return visited.get(node);     // visited中存储的是参数节点为键的拷贝结果。为什么取node节点就能得到结果？因为node节点neighbors中已经完整的push了其他邻居节点。他就已经是图被完整给克隆的结果。
};

// node的结构。类似于链表
// [[2,4],[1,3],[2,4],[1,3]]
// 参数为节点1:
const node = {
  val: 1,
  neighbors: [{ val: 2, neighbors: [Array] }, { val: 4, neighbors: [Array] }]
}
