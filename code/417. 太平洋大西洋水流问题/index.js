/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
// 时间复杂度：O(m*n)，空间复杂度：O(m*n)
var pacificAtlantic = function (heights) {
  if (!heights || !heights[0]) return [];
  const m = heights.length;         // 大陆单元格矩阵行数
  const n = heights[0].length;      // 大陆单元格矩阵列数
  // 新建两个一模一样的矩阵数组，长度和列数分别等同于大陆单元格的行数及列数，每个单元格都是false
  const flow1 = Array.from({ length: m }, () => new Array(n).fill(false));
  const flow2 = Array.from({ length: m }, () => new Array(n).fill(false));
  // Array.from将类数组转为数组，第二个回调函数参数的作用同数组map方法

  const dfs = (row, col, flow) => {
    flow[row][col] = true;      // 如果进入这个递归，就给这个单元格设为true
    // 遍历给定单元格的周围上下左右四个单元格
    [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]].forEach(
      ([nextRow, nextCol]) => {
        // 保证周遭这个单元格在矩阵内，并且它的值是false——这样就保证了没有遍历过的才会进入遍历(因为已经经过的单元格都为true)
        // 并且这个单元格对应的大陆单元格坐标值大于等于给定的坐标值，就继续递归
        if (
          nextRow >= 0 && nextRow < m &&
          nextCol >= 0 && nextCol < n &&
          !flow[nextRow][nextCol] &&
          heights[nextRow][nextCol] >= heights[row][col]
        ) {
          dfs(nextRow, nextCol, flow);    // 相邻的比自己大，就以相邻的为出发点去遍历，比自己小的就不用遍历了，因为它无法流向自己后面的大洋
        }
      })
  }

  // 沿着海岸线逆流而上。
  for (let r = 0; r < m; r++) {
    dfs(r, 0, flow1);     // flow1左上单元格开始遍历左竖排
    dfs(r, n - 1, flow2);    // flow2右上单元格开始遍历右竖排
  }

  for (let c = 0; c < n; c++) {
    dfs(0, c, flow1);          // flow1左上单元格开始遍历上横排
    dfs(m - 1, c, flow2);      // flow2左下角单元格开始遍历下横排
  }

  console.log(flow1);   // flow1是记录可以流向太平洋的单元格
  console.log(flow2);   // flow2是记录可以流向大西洋的单元格



  // 收集能流到两个大洋里的坐标
  const res = [];
  // 使用嵌套遍历每一个单元格，在两个矩阵都为true的则符合要求
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (flow1[r][c] && flow2[r][c]) {
        res.push([r, c])
      }
    }
  }
  console.log(res)
  return res;
};

const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4]
]
pacificAtlantic(heights)