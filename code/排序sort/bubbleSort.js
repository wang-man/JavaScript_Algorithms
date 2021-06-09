
// 冒泡排序
Array.prototype.bubbleSort = function () {
  let index = 0;
  for (let i = 0; i < this.length - 1; i++) {
    index = 0;
    while (index < this.length - 1 - i) {   // 随着遍历，数组尾部已是排序完的结果，因此不再需要去对比
      const f = this[index], s = this[index + 1];
      if (f > s) {
        this[index + 1] = f;
        this[index] = s;
      }
      index++;
    }
  }
}
const arr = [5, 3, 8, 6, 2, 9, 4, 7, 1];

arr.bubbleSort();
console.log(arr);
