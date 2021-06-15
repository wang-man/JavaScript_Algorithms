// 使用入栈与出栈的概念。左括号先入栈，遇到匹配的右括号就出栈，到最后栈里还存在括号说明不合格。
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const m = s[i], n = stack[stack.length - 1];
    console.log(m, n)

    if (m === ')' && n === '(' || m === ']' && n === '[' || m === '}' && n === '{') {
      stack.pop()
    } else {
      stack.push(m)
    }
  }
  return !stack.length
};

console.log(isValid('[()]'))