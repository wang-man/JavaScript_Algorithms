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
// 广度优先遍历：同级节点遍历后再深入子级节点。因此关键点是将同级兄弟节点依次插入到一个数组，遍历到其中一个的时候它的子节点又从后依次插入。使用队列。
const bfs = root => {
  const q = [root];
  while (q.length > 0) {
    const h = q.shift();    // 取出数组头一个
    console.log(h.val);
    h.children && h.children.forEach(child => {   // 将被取出的子节点的子节点插入数组后部。叔侄同台，前赴后继。
      q.push(child);
    });
  }
}

bfs(tree);