/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  // graph是每个字符状态的表示图。0-7的值是当前状态能够选择的走向。每个字符串起始状态是0，一个字符串通过依次遍历每个字符。
  // 1.得到每次遍历到的字符的类型，
  // 2.根据上一个记录的状态state，从graph中查找该字符的类型对应的状态。
  // 3.如果得不到任何一个状态，说明不符合条件，直接返回false。
  // 4.重复1-3步，直至全部遍历完得到结果。
  const graph = {
    0: { "blank": 0, "digit": 6, "sign": 1, "dot": 2 },
    1: { "digit": 6, "dot": 2 },
    2: { "digit": 3 },
    3: { "digit": 3, "e": 4 },
    4: { "digit": 5, "sign": 7 },
    5: { "digit": 5 },
    6: { "digit": 6, "dot": 3, "e": 4 },
    7: { "digit": 5 }
  }
  let state = 0;  // 起始状态为0
  for (let c of s.trim().toLowerCase()) {       // c是每个字符
    if (c >= '0' && c <= '9') {
      c = 'digit';
    } else if (c === ' ') {
      c = 'blank';
    } else if (c === '+' || c === '-') {
      c = 'sign';
    } else if (c === '.') {
      c = 'dot';
    } else if (c === 'e') {
      c = 'e';
    }
    state = graph[state][c];     // state记录遍历到每个字符后该字符串的状态，这个状态对应7个选择，然后根据c选择它所属的走向状态。然后接着下一轮遍历。
    if (state === undefined) return false;
  }
  if (state === 3 || state === 6 || state === 5) return true;
  return false;
};


const res = isNumber('-0.1');
console.log(res)
