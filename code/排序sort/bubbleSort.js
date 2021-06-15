
// 冒泡排序：
// 比较相邻的元素。如果第一个比第二个大，就交换他们两个。 [1] 
// 对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。 [1] 
// 针对所有的元素重复以上的步骤，除了最后一个。 [1] 
// 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
// 从视觉上看，元素从左往右不停的交换，较大的那个都会向右移动，效果就像冒泡一样。
Array.prototype.bubbleSort = function () {
  let index = 0;
  for (let i = 0; i < this.length - 1; i++) {
    index = 0;
    while (index < this.length - 1 - i) {   // 随着遍历，数组尾部已是排序完的结果，因此不再需要去对比
      const f = this[index], s = this[index + 1];   // 取相邻的两个
      if (f > s) {                                  // 如果前一个大于后一个，就交换两者位置
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
