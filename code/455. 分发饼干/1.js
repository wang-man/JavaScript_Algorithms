/**
 * @param {number[]} g：孩子胃口
 * @param {number[]} s：饼干尺寸
 * @return {number}
 */
// 按自己对贪心算法的理解的解法，第一次使用到了Infinity
// 思路：遍历饼干数量，内部同时遍历孩子，得到饼干尺寸和孩子的胃口差，这个差大于0说明这个饼干可以满足孩子，但还要保证这个差是最小的，以尽可能满足最大胃口的孩子，实行了贪心算法思想。上述条件满足了就给变量count加1，表示已经满足了的孩子数量，同时要移除掉这个已经被满足的孩子，避免他重复吃下一个饼干。
var findContentChildren = function (g, s) {
  if (!s.length) return 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let min = Infinity, index = null;     // min假设为无穷大Infinity
    for (let j = 0; j < g.length; j++) {
      const r = s[i] - g[j];
      if (r >= 0 && r < min) {            // 比上一个的差更小说明这个更合理
        min = r;
        index = j;
      }
    }

    if (index != null) {
      console.log('index', index);
      count++;
      g.splice(index, 1);
    }
  }
  console.log(count);
  return count;
};

const g = [2, 3, 2, 3], s = [2, 2];
findContentChildren(g, s)
