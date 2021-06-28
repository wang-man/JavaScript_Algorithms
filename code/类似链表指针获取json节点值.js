// 比如给定一个既有json数据，然后给定一个可变的path，根据这个path去从json中取值

const json = {
  a: { b: { c: 1 } },
  d: { e: 2 }
}

const path = ['a', 'b', 'c'];


// 解题：其实很简单，遍历这个path数组，数组项就作为k从json中获取值， 使用一个变量存储每次拿到的值。
let p = json;

for (let i = 0; i < path.length; i++) {
  const k = path[i];
  p = p[k];
  if (!p) {
    p = null;
    break;
  }
}
console.log(p)