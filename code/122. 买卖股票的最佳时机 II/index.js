/**
 * @param {number[]} prices
 * @return {number}
 */
// 最优解：直接比较当前与前一个的价格，用当前减去前一个价格得到差价。不必考虑能买卖多少次，像[1，2，3，4，5]通过每天买卖来累加总差价
var maxProfit = function (prices) {
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      res = res + prices[i] - prices[i - 1];
    }
  }
  console.log(res)
  return res;
};

const prices = [5, 2, 3, 2, 6, 6, 2, 9, 1, 0, 7, 4, 5, 0]
maxProfit(prices)