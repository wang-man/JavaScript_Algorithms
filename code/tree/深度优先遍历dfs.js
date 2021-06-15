const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd'
        },
        {
          val: 'e'
        }
      ]
    },
    {
      val: 'c',
      children: [
        {
          val: 'f'
        },
        {
          val: 'g'
        }
      ]
    }
  ]
}
// 深度优先遍历：将一个分支从父到孙全部遍历完再遍历兄弟节点。
const dfs = root => {
  console.log(root.val);
  // 在forEach中嵌套递归，这样总是沿一条线深入到底，然后再深入兄弟分支，这样就做到了深度优先
  root.children && root.children.forEach(child => {     // 可直接简写为root.children && root.children.forEach(dfs)
    dfs(child)
  });
}
dfs(tree);

