/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let result = true;

  while (/\(\)|\[\]|\{\}/.test(s)) {
    console.log('s', s)
    s = s.replace('()', '')
    s = s.replace('[]', '')
    s = s.replace('{}', '')
  }

  if (s !== '') result = false;
  return result;
};

console.log(isValid('()[()[]]'))