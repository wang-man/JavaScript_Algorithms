
// 插入排序
Array.prototype.insertSort = function () {
  if (this.length <= 1) return this;
  for (let i = 1; i < this.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (this[j + 1] < this[j]) {        // 后面的如果比前面的小
        const before = this[j];
        this[j] = this[j + 1];
        this[j + 1] = before;
      } else {
        break;
      }
    }
  }
}
const arr = [4, 8, 9, 5];

arr.insertSort();
console.log(arr);
