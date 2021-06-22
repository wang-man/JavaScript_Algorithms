
const transform = (s, start, end) => {
  let sub = s.slice(start - 1, end);
  let arr = [...sub];
  for (let i = 0; i < arr.length; i++) {
    arr[i] === '1' ? arr[i] = '0' : arr[i] = '1';
  }
  sub = arr.join('');
  return s.slice(0, start - 1) + sub + s.slice(end);
}
const res = transform('10101', 1, 3);
console.log(res);