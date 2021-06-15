const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 8,
        left: null,
        right: null
      },
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}
// 递归版
// const postorder = root => {
//   if (!root) return;
//   postorder(root.left);      // left先执行递归
//   postorder(root.right);     // right后执行递归，就形成了先序遍历。
//   console.log(root.val);    // 最后访问到子节点
// }

// 非递归版
const postorder = root => {
  if (!root) return;
  const outputStack = [];
  const stack = [root];
  // 栈的push加pop，outputStack的元素节点会形成反向：根->右->左的顺序。
  while (stack.length) {
    const n = stack.pop();
    outputStack.push(n);
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }
  // outputStack是根->右->左的顺序，pop的方式拿取就形成了左->右->根的反序，达到了目标。
  while (outputStack.length) {
    const n = outputStack.pop();
    console.log(n.val);
  }
}


postorder(tree);