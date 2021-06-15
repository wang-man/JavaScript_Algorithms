// 假定给一个json数据，要求遍历这个json数据的全部节点，该如何做，并且要知道相应的路径。

const json = {
  a: { b: { c: 1 } },
  d: [1, 2, 3]
}

// 这个json不像二叉树每个节点都是固定的left、right属性名，它的属性名是不固定的，这种情况下要遍历到这个json的每个节点
// 关键的是要知道怎么遍历一个对象，其实就是使用Object.keys将对象的key变为一个数组来遍历即可。讲师只讲了深度遍历，其实广度遍历也是可以的。

const bfs = (n) => {
  const q = [n];
  while (q.length) {
    const h = q.shift();
    // console.log(h)
    Object.keys(h).forEach(k => {
      console.log(k)
      q.push(h[k])
    })
  }
}

const dfs = (n) => {
  Object.keys(n).forEach(k => {
    console.log(k)
    dfs(n[k])
  })
}
// 使用for in遍历也可以
const dfs2 = (n) => {
  for (const k in n) {
    console.log(k)
    if (n[k] instanceof Object) {
      dfs2(n[k])
    }
  }
}

// bfs(json);
// dfs(json)
dfs2(json)