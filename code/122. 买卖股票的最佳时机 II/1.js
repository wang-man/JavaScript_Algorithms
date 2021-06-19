/**
 * @param {number[]} prices
 * @return {number}
 */
// 解题思路：遍历数组，如果遇到当前的下一个价格大于当前说明到了交易的机会。这个前提下，如果还没有预设买点，就以当前为买点。如果下下个价格小于下一个，说明下一个就是卖点
var maxProfit = function (prices) {
  let buy = null, res = 0, canBuy = true;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] >= 0 && prices[i] < prices[i + 1]) {
      // 如果还没有预设买点，就以当前为买点
      if ((buy != null ? prices[i] <= prices[buy] : true) && canBuy) {
        buy = i;
        canBuy = false;
      }
      // 如果下下个价格小于下一个，或者已经到了数组底部，说明下一个就是卖点。这个时候就卖掉
      if (prices[i + 2] >= 0 && prices[i + 2] <= prices[i + 1] || (i + 1) === prices.length - 1) {
        res = res + (prices[i + 1] - prices[buy]);
        buy = null;
        canBuy = true;
      }
      if (i === (prices.length - 1)) {
        res = res + (prices[i] - prices[buy]);
      }
    }
  }
  console.log(res)
  return res;
};

const prices = [5, 2, 3, 2, 6, 6, 2, 9, 1, 0, 7, 4, 5, 0]
maxProfit(prices)