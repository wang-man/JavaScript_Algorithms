//快速排序:
// 快速排序是取数组中任意一位作为参照(一般开始就取第一个)，遍历对比其它数字，小于的放在一个叫left的数组，大于的放在叫right的数组。遍历一圈后返回这个函数处理结果：left放在左边，right放在右边，被参照的那个数字肯定是放在中间。这样完成了第一波，然后递归的对left和right做同样的处理。
// 整个过程相当于不断地使用这种粗颗粒度的划分，随着不断被被拆开的left和right，粗颗粒度逐渐变为细颗粒度，直至使之划分到单个的元素。
Array.prototype.quikSort = function () {
  const rec = arr => {
    if (arr.length <= 1) return arr;
    const left = [];
    const right = [];
    const mid = arr[0];   // 参照数，将放在新数组中间
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  }
  const res = rec(this);
  res.forEach((n, i) => {
    this[i] = n;
  });
}
const arr = [5, 3, 8, 9, 6, 2];

arr.quikSort();
console.log(arr);
