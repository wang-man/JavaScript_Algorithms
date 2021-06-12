// 二分搜索，先决条件是数组是呈现顺序排列的
// 过程是取数组中间元素与目标数对比，如果比目标元素小，那么就用左边数组部分的中间元素来对比，如果比之大，就用右边数组部分的中间元素对比。这样不断的折半搜索范围。
// 关键点是折半后的数组还得记录下起始的index值。
Array.prototype.binarySearch1 = function (item) {
  const rec = (arr, start) => {
    if (arr.length === 1 && arr[0] !== item) return -1;
    const mid = Math.floor(arr.length / 2);
    if (arr[mid] === item) {
      return start + mid;
    } else if (arr[mid] < item) {
      return rec(arr.slice(mid + 1), mid + 1);
    } else if (arr[mid] > item) {
      return rec(arr.slice(0, mid), start);
    }
  }
  return rec(this, 0);
}

// 更好的方式：不需要使用到数组本身，只需要利用每次折半数组后起始和结束的index即可
Array.prototype.binarySearch2 = function (item) {
  let low = 0;
  let high = this.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);     // 取得中间元素的index值
    if (this[mid] < item) {
      low = mid + 1;       // 取右侧，起始index从mid+1开始
    } else if (this[mid] > item) {
      high = mid - 1;      // 取左侧，最大的index是mid-1
    } else {
      return mid;
    }
  }
  return -1;
}


console.log([1, 2, 3, 4, 5, 6].binarySearch2(1));
