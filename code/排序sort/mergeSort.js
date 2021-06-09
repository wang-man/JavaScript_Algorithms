// 归并排序
Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) return arr;    // 拆分为每个数字一个数组
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    const orderedLeft = rec(left);    // 排序之后的,第一波分别为 [5],[8], [6]，第二波为[3, 5], 
    const orderedRight = rec(right);  // 分别为[3], undefined, [2]
    const res = [];
    while (orderedLeft.length || orderedRight.length) {
      // 注意连续的else if只会执行一次
      if (orderedLeft.length && orderedRight.length) {
        res.push(orderedLeft[0] < orderedRight[0] ? orderedLeft.shift() : orderedRight.shift());
      } else if (orderedLeft.length) {  // 只其中一个有值的情况
        res.push(orderedLeft.shift())
      } else if (orderedRight.length) {
        res.push(orderedRight.shift())
      }
    }
    return res;   // 一定要返回每次递归后的结果
  }
  const res = rec(this);
  res.forEach((n, i) => {
    this[i] = n;
  })

}
const arr = [5, 3, 8, 6, 2];

arr.mergeSort();
console.log(arr);
