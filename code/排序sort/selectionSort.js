// 选择排序
Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < this.length; j++) {   // 选中的元素只需要和后面的部分对比
      if (this[minIndex] > this[j]) {
        minIndex = j;
      }
    }
    const min = this[minIndex];
    this[minIndex] = this[i];   // 交换两个元素
    this[i] = min;
  }
}
const arr = [5, 3, 8, 6, 2, 9, 4, 7, 1];

arr.selectionSort();
console.log(arr);
