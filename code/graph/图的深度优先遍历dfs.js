const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
}

const visited = new Set();
const dfs = (n) => {
  console.log(n);     // 打印遍历到的节点
  visited.add(n);
  graph[n] && graph[n].forEach(c => {
    if (!visited.has(c)) {      // 判断是没有访问过的
      dfs(c)
    }
  });
}

dfs(2);   // 从2为起始节点(根节点)
// 2->0->1->3   起始节点为2，2的下一节点是0、3，因此是2->0，0的下一节点是1、2，因此是2->0->1，1的下一节点是2，但因为2已经被访问过，因此跳过。又回到上一个递归:节点0，它的下节点2同样原因跳过。又回到上上个递归：节点2，它还有个节点3，因此最后是2->0->1->3