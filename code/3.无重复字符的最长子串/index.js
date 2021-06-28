/**
 * @param {string} s
 * @return {number}
 */

//  解题思路：借用视频剪辑来类比。我们从一段画面可能存在多处重复的视频中剪出不存在重复画面的并且最长的那段。字符串就是这个视频。
// 开始遍历前左侧剪刀与右侧剪刀同处于在最左边，每一次的遍历就是右剪刀向后移动一步的过程，同时记录下右剪刀与左剪刀之间的距离，并只取最长的距离。当遍历时遇到相同画面，就将左剪刀移动到重复的那段之后。(这里要注意在比较相同画面时要只比较两个剪刀之间的视频)。直到遍历完成，左右剪刀之间最长的那次距离，就是所需结果
// 时间复杂度：O(n)，空间复杂度：O(m)，m是字符串中不重复的个数
var lengthOfLongestSubstring = function (s) {
  let l = 0;    // 左剪刀
  const map = new Map();
  let res = 0;
  for (let r = 0; r < s.length; r++) {      // r为右剪刀
    // 如果发现与字典中存在同样的字符，左侧剪刀就移到这个重复字符右侧。（要保证比对的字符是剪刀之间的）
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1;      // 左剪刀移动到重复的画面的后面
    }

    res = Math.max(res, r - l + 1);    // 右剪刀到左剪刀的距离是不断变化的，取最长的那次
    map.set(s[r], r);     // 字典中存储画面及其下标
  }
  return res;
};

// const s = 'abbca';
// const s = 'aaaa';
// const s = '';
// const s = ' ';
const s = 'abcbde';
lengthOfLongestSubstring(s)