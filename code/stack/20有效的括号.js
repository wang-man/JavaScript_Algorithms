const bracketsString = '';

function validBrackets(brackets) {
  bracketsArr = brackets.split('');
  let result = true;
  if (bracketsString !== '') {
    function loop() {
      for (let i = 0; i < bracketsArr.length; i++) {
        if (bracketsArr[i] === ')' && bracketsArr[i - 1] === '(' || bracketsArr[i] === ']' && bracketsArr[i - 1] === '[' || bracketsArr[i] === '}' && bracketsArr[i - 1] === '{') {
          bracketsArr.splice(i - 1, 2);
          loop();
          return;
        }
      }
    }
    loop()
  }

  console.log('bracketsArr', bracketsArr)
  if (bracketsArr.length !== 0) {
    result = false
  }

  console.log(result)
  return result;
}


validBrackets(bracketsString)