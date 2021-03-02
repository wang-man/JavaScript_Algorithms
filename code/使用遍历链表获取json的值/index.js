// 题目：根据link中的顺序去从json中找到对应的值

const json = {
  a: { b: { c: 1 } },
  d: { e: 2 }
}

const link = ['a', 'b', 'c']

let p = json;
link.forEach(k => {
  p = p[k]
})

console.log(p)