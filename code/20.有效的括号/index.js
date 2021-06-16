// 使用入栈与出栈的概念。左括号先入栈，遇到匹配的右括号就出栈，到最后栈里还存在括号说明不合格。
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i], top = stack[stack.length - 1];
    console.log(c, top)

    if (c === ')' && top === '(' || c === ']' && top === '[' || c === '}' && top === '{') {
      stack.pop()
    } else {
      stack.push(c)
    }
  }
  return !stack.length
};

console.log(isValid('[()]'))