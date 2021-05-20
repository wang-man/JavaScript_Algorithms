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
var cloneGraph = function (node) {
  if (!node) return;
  const visited = new Map();
  visited.set(node, new Node(node.val));
  const q = [node];
  while (q.length) {
    const n = q.shift();
    (n.neighbors || []).forEach(nei => {
      if (!visited.has(nei)) {
        q.push(nei);
        visited.set(nei, new Node(nei.val));
      }
      visited.get(n).neighbors.push(visited.get(nei));
    });
  }
  return visited.get(node);
};