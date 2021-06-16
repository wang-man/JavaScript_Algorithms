// 使用入栈与出栈的概念。左括号先入栈，遇到匹配的右括号就出栈，到最后栈里还存在括号说明不合格。
// 后进先出就是，总是拿最后一个进入的去比对后面的，匹配了就移除
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const stack = [];

  const map = new Map();
  map.set('(', ')');
  map.set('[', ']');
  map.set('{', '}');

  for (let i = 0; i < s.length; i++) {
    const c = s[i], top = stack[stack.length - 1];      // n是栈里最后一个

    // if (c === ')' && top === '(' || c === ']' && top === '[' || c === '}' && top === '{') {
    // 利用map的特性，省去了上一行长长的判断
    if (map.get(top) === c) {       //  总是用最后一个去比对
      stack.pop()                 //  匹配了就移除最后一个
    } else {
      stack.push(c)
    }
  }
  console.log(stack);
  return !stack.length
};

console.log(isValid('[()}}]'))