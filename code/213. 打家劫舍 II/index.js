/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let n_2 = 0, n_1 = nums[0];    // n_2和n_1分别表示偷前n-2和n-1个房子得到的总金额。
  for (let i = 2; i < nums.length; i++) {      // 房子的数量从2开始
    const max = Math.max(n_2 + nums[i - 1], n_1);   // max表示偷/不偷间得到的最大总金额
    n_2 = n_1;      // 往后推移，这个房子过后,n_2和n_1都向后走一位，因此各自得到自己的金额
    n_1 = max;
  }

  let n_4 = nums[1], n_3 = nums[2];    // n_2和n_1分别表示偷前n-2和n-1个房子得到的总金额。
  for (let i = 3; i < nums.length; i++) {      // 房子的数量从2开始
    const max = Math.max(n_4 + nums[i], n_3);   // max表示偷/不偷间得到的最大总金额
    n_4 = n_3;      // 往后推移，这个房子过后,n_2和n_1都向后走一位，因此各自得到自己的金额
    n_3 = max;
  }
  return Math.max(n_1, n_3)
  console.log(n_1, n_3)
  // return n_1;
};
rob([3, 3, 2, 1])