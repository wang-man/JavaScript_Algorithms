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
// 非递归版利用一个指针指向二叉树，通过遍历，将指针push到一个栈中，然后指针指向下一级左节点，再接着push，直至所有的左节点被push到栈中。然后拿出栈中最后一项（这个是二叉树最末尾的左节点），得到它的val，接着指针又指向这一项的右节点。再重复上面的拿到左节点push到栈操作。
// 整个过程始终都是：将所有的左节点push到栈，然后从栈的末尾开始将每项的左节点再次push到栈。节点被访问的顺序的是左节点->根节点val->右节点， 这个顺序就是中序遍历
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