/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const rec = (path) => {
    if (path.length === nums.length) {     // 数组长度等同于参数数组长度，说明这一列排列完成
      res.push(path);
      return;
    }
    nums.forEach(n => {
      if (path.includes(n)) return;
      // path.push(n);       
      rec(path.concat(n));          // 这里不能是push之后的path，否则全局会导致共用这一个path，但使用concat会创建新的变量，path就变成每次递归生成新的。
    })
  }
  rec([]);
  console.log(res)
  return res;
};

const nums = [1, 2];
permute(nums);