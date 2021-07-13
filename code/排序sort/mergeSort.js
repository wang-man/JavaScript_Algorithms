// 归并排序：
// 将目标数组两两等分，一直分到每单个元素形成一个数组。然后又两两取出数组的的第一项来排序，形成新的数组返回给递归函数。
// 8分为4，4分为2，2分为1，1合为2，2合为4，4合为8
Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) return arr;    // 拆分为每个数字一个数组
    const mid = Math.floor(arr.length / 2); // 两两均分
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    const orderedLeft = rec(left);    // 排序之后的,第一波分别为 [5],[8], [6]，第二波为[3, 5], 
    const orderedRight = rec(right);  // 分别为[3], undefined, [2]
    const res = [];
    while (orderedLeft.length || orderedRight.length) {
      if (orderedLeft.length && orderedRight.length) {
        res.push(orderedLeft[0] < orderedRight[0] ? orderedLeft.shift() : orderedRight.shift());  // 取第一个元素
      } else if (orderedLeft.length) {  // 只其中一个有值的情况
        res.push(orderedLeft.shift())
      } else if (orderedRight.length) {
        res.push(orderedRight.shift())
      }
    }
    return res;   // 一定要返回每次递归后的结果，res
  }
  const res = rec(this);
  res.forEach((n, i) => {
    this[i] = n;
  })

}
const arr = [5, 3, 8, 6, 2];

arr.mergeSort();
console.log(arr);
