/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = s.split('');
  let result = true;
  if (s !== '') {
    function loop() {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ')' && arr[i - 1] === '(' || arr[i] === ']' && arr[i - 1] === '[' || arr[i] === '}' && arr[i - 1] === '{') {
          arr.splice(i - 1, 2);
          loop();
          return;
        }
      }
    }
    loop()
  }
  if (arr.length !== 0) {
    result = false
  }
  return result;
};