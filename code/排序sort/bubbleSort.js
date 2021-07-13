
// 冒泡排序：
// 比较相邻的元素。如果第一个比第二个大，就交换他们两个。 [1] 
// 对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。 [1] 
// 针对所有的元素重复以上的步骤，除了最后一个。 [1] 
// 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
// 从视觉上看，元素从左往右不停的交换，较大的那个都会向右移动，效果就像冒泡一样。
// 时间复杂度：O(n^2)
Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {     // 减去i是因为末尾是已经排序过的，就不必再去和它们对比了
      if (this[j] > this[j + 1]) {
        const temp = this[j];                      // 如果前一个大于后一个，就交换两者位置
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
}
const arr = [5, 3, 8, 6, 2, 9, 4, 7, 1];

arr.bubbleSort();
console.log(arr);
