/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let arr = [];
  let length = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const index = arr.indexOf(c);
    if (index > -1) {
      // 当前数组如果大于以前的数组，就存当前数组的长度
      if (arr.length > length) {
        length = arr.length;
      }
      // 然后更新这个数组
      arr = arr.slice(index + 1);
    }
    arr.push(c);
  }
  if (arr.length > length) {
    length = arr.length
  }
  return length;
};