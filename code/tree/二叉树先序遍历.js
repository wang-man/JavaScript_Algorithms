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

// 先序遍历指的是：根节点首先被获取，然后是根节点的左节点，最后是根节点的右节点


// 递归版
// const preorder = root => {
//   if (!root) return;
//   console.log(root.val);    // 先访问到根节点
//   preorder(root.left);      // 然后left先执行递归
//   preorder(root.right);     // right后执行递归，就形成了先序遍历。
// }


// 非递归版：使用栈的概念，将根节点push入栈，遍历这个栈，每次遍历首先取出末尾那个，被取出的如果有右节点就将右节点插入到栈，如果有左节点也插入到栈。因为是后进先出，所以左节点后push，才可以先pop。
// 非递归版看似是使用while遍历，但因为使用栈的后进先出，只要有子节点就始终都会先沿着一条分支逐步深入，然后再深入另一条分支，所以其实质仍是递归。
const preorder = root => {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();   // 使用栈的后进先出
    console.log(n.val);
    if (n.right) stack.push(n.right);     // 注意这两行顺序
    if (n.left) stack.push(n.left);       // 注意这两行顺序
  }
}

preorder(tree);