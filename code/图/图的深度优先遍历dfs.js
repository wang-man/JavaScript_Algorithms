const graph = {
  0: [1, 2],
  // 1: [2],
  2: [0, 3],
  3: [3]
}

const visited = new Set();
const dfs = (n) => {
  console.log(n);     // 打印遍历到的节点
  visited.add(n);
  graph[n] && graph[n].forEach(c => {
    if (!visited.has(c)) {
      dfs(c)
    }
  });
}

dfs(2);   // 从2为头开始遍历