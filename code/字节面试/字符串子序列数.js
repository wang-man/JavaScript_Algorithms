
const getChildrenStr = (s, n) => {
  const res = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (j + n <= s.length) {
        res.push(s[i] + s.slice(j + 1, j + n))
      }
    }
  }
  console.log(res);
  return res.length;
}
getChildrenStr('word', 2)