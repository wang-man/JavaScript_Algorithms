/**
 * @param {string} s
 * @return {number}
 */


//  解题思路：使用循环来遍历这个字符串，将每个字符插入一个数组中，在遍历方法下不断的插入过程中，如果遇到已存在数组中相同的字符就从其后剪切这个数组，以保证这个数组中的每个字符都是唯一的。每次遍历后要将数组的长度保存下来，与上次遍历时的这个数组的长度相比较，取其中最长的值。这个值就是所需结果。
// 关键的地方就在于这个数组的作用。它用于存储这个字符串中所有可能的不存在重复字符的子串。在不断地存储新的子串及记录该数组长度后，取得存储过的最长的子串的长度就是所需结果。
var lengthOfLongestSubstring = function (s) {
  let arr = [];
  let length = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const index = arr.indexOf(c);
    arr.push(c);

    if (index > -1) {
      // 遇到重复的字符，就剪除被重复那个及其之前的部分
      arr = arr.slice(index + 1);
    }
    // 新的数组长度如果大于以前的数组，就存当前数组的长度
    if (arr.length > length) {
      length = arr.length;
    }
  }
  console.log(length)
  return length;
};

// const s = 'abbca';
// const s = 'aaaa';
// const s = '';
// const s = ' ';
const s = 'abcbde';
lengthOfLongestSubstring(s)