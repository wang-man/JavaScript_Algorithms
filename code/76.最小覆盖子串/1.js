/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 输入：s = "ADOBECODEBANC", t = "ABC"
var minWindow = function (s, t) {
  let l = 0, r = 0;
  const map = new Map();
  for (const c of t) {
    map.set(c, map.has(c) ? map.get(c) - 1 : 0);    // map中存储所需字符，value默认为0
  }
  // console.log(map);
  let mapSize = map.size;   // mapSize是一个重要的标致，为0就标致着ABC都遍历出来了
  let res = '';
  while (r < s.length) {      // 通过遍历不停的移动右指针
    const c = s[r];
    if (map.has(c)) {         // 如果遇到map中有的这个字符，就给map中这个字符的value加上1
      map.set(c, map.get(c) + 1);       // 该字符map值加1。（有可能大于1了，比如左右指针间两个B）
      if (map.get(c) === 1) mapSize--;    // map中的三个字符都遍历到了，mapSize递减直到为0。
    }

    // 这里使用while而不是if。因为这段内部mapSize可能保持几次都为0，这样while体可以多次执行，而if只执行一遍，无法监听因mapSize的变化来再次执行。
    // 当mapSize减为0，说明三个字符都已经遍历到了，这个时候就可以从字符串中截取包含他们的子串了
    while (mapSize === 0) {
      const newStr = s.substring(l, r + 1);
      console.log(newStr)
      if (!res || newStr.length < res.length) res = newStr;
      const c2 = s[l];
      if (map.has(c2)) {
        map.set(c2, map.get(c2) - 1);     // 如果匹配到的子串第一个字符属于ABC，就给它的map值减1，因为随着左指针递增，它即将被丢弃
        if (map.get(c2) === 0) mapSize++;   // 第一个字符恢复了0，mapSize也递增
      }
      l++;    // 左指针向右移动一格
    }
    r++;
  }
  console.log('res =>', res)
  return res;
};

// 只有当map中A、B、C值都变为1及以上，说明A、B、C三个字符都被遍历了一遍，左右指针之间也就包含全部的A、B、C三个字符（也就是说map值就是左右指针间包含的ABC每个字符的数量），mapSize也就当然变为了0。因此mapSize是一个重要的标致，标致着A、B、C是否都在左指针与右指针之间。当mapSize为0时，会进入内部的while循环中，开始截取左指针与右指针之间包含ABC的有效子串，同时左指针开始逐次加1，也就是向右移动。在左指针向右移前如果遇到ABC中的一个，那么这次遍历会导致左指针跨过它，也就可能影响左右指针能否包含住A、B、C全部字符。这种情况分两种结果：一是漏出ABC中的一个，不再包含完整的A、B、C三个字符。二是即便漏出其中一个，但左右指针之间仍然包含另一个相同的字符（也就是之前就进入了两个相同的该字符），这时内部while遍历仍然继续进行。
// 以上在内部的while遍历时，只要A、B、C漏掉不再被完整包含在左右指针间，mapSize都会加1。外层while循环接着向后遍历，右指针右开始右移。

// 输出："BANC"
const s = "a", t = "aa";
minWindow(s, t)
