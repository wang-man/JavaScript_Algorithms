/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  const dp = [1, 2];     // dp表示第n个台阶的爬法，n从1开始。这是一个斐波那契数列
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];    // 因为爬法符合斐波那契数列，
  }
  return dp[n - 1];     // 取数组项时要减掉一
};

console.log(climbStairs(3))

