// 选择排序
// 假设选第一个元素作为用来比较大小的参考，与身后的元素相比较。遇到了比自己小的那个，就记下它的index值，并用小的替换原来的作为新的参考。一直找到身后最小的那个。然后将初始用来参考的元素与这个最小的交换位置。以此遍历，每次找剩余的最小的那个交换位置到前面去。
// 这个过程就是每次选择一个元素，假设其为最小的，去寻找更小的并交换位置。就是选择排序。
Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    let minIndex = i;        // 1.假设最小的index从自己开始
    for (let j = i; j < this.length; j++) {   // 选中的元素只需要和后面的部分对比
      if (this[minIndex] > this[j]) {   // 2.用目前最小的向后比
        minIndex = j;       // 3.记下最小元素的index，用它来
      }
    }
    const min = this[minIndex];
    this[minIndex] = this[i];   // 4.交换起始那个与最小的。
    this[i] = min;
  }
}
const arr = [5, 3, 8, 6, 2, 9, 4, 7, 1];

arr.selectionSort();
console.log(arr);
