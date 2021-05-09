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
// const inorder = root => {
//   if (!root) return;
//   inorder(root.left);      // 先去左树深挖左树
//   console.log(root.val);   // 然后找根节点
//   inorder(root.right);     // 最后去右树深挖左树
// }


// 非递归版
// 非递归版利用对象的指针，通过遍历，指针不断指向下一级左节点，然后拿出栈中最后一个，指针又指向它的右节点，重复往复。就做到了左节点->父节点->右节点 这个顺序的中序遍历
const inorder = root => {
  if (!root) return;
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);      // 收集每一轮遍历的节点的全部左节点
      p = p.left;
    }
    const n = stack.pop();   // 每次取最后一个，也就是最末枝的左节点
    console.log(n.val);
    p = n.right;             // 最后一个节点的右节点
  }
}

inorder(tree);