const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
}

// 和二叉树的广度优先遍历一样，图的广度优先遍历也是使用队列。
// 最后得到的结果和二叉树的遍历是一样的。
const visited = new Set();
visited.add(2);
const q = [2];
while (q.length) {
  const n = q.shift();
  console.log(n);
  graph[n].forEach(c => {
    if (!visited.has(c)) {
      q.push(c);
      visited.add(c);
    }
  })
}