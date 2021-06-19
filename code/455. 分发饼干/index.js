/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 解题思路：将孩子的胃口和饼干都按照升序排列。遍历饼干，如果饼干尺寸大于孩子的胃口，说明孩子能被这块饼干满足，然后继续用后面的饼干和孩子对比。为什么说这是符合贪心算法思想？因为先用最小的饼干去满足孩子，能满足就行了，只有当这个饼干满足不了的时候才用较大的饼干去满足。(这里将孩子胃口升序排列容易让人以为是和贪心思想相悖，给孩子排序只是为了在遍历饼干时能够累加出能够被满足的孩子，而已。)
var findContentChildren = function (g, s) {
  if (!s.length) return 0;
  const sortFun = (a, b) => {
    return a - b
  }
  g.sort(sortFun);
  s.sort(sortFun);
  let i = 0;
  s.forEach(n => {
    if (n >= g[i])
      i++;
  })
  console.log(i)
  return i;
};

const g = [1, 2, 3], s = [1];
findContentChildren(g, s)
