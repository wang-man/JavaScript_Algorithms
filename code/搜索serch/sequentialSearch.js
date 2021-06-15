// 顺序搜索，其实就是实现数组的indexOf方法；
Array.prototype.sequentialSearch = function (item) {
  for (let i = 0; i < this.length; i++) {
    if (item === this[i]) return i;
  }
  return -1;
}
console.log([1, 2, 3, 4, 5].sequentialSearch(3));
