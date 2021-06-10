
// 插入排序；
// 用第二个与第一个相比较，反序的话就交换两者的位置。然后用第三个向前比较，依次比较前面的数字，遇到比自己大的就交换两个的位置。
// 有点像一堆无序的扑克牌，从左开始将小的牌取出往左边按由小到大插入。因此叫插入排序。
Array.prototype.insertSort = function () {
  if (this.length <= 1) return this;
  for (let i = 1; i < this.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (this[j + 1] < this[j]) {        // 后面的如果比前面的小，就交换两个的位置。
        const before = this[j];
        this[j] = this[j + 1];
        this[j + 1] = before;
      } else {
        break;        // 如果相比较的两个是正常从小到大或相等的顺序，就直接跳过这个遍历，因为这一波已经达到目的可以直接结束了。
      }
    }
  }
}
const arr = [4, 8, 9, 5];

arr.insertSort();
console.log(arr);
