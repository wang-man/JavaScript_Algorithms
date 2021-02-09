// js模拟链表

const a = { val: 'a' }
const b = { val: 'b' }
const c = { val: 'c' }

a.next = b
b.next = c

console.log('a=>', a)

// 遍历列表
let p = a;
while (p) {
  p = p.next    // 给p重新赋值，p的值会逐渐变为undifined
  console.log('p=>', p)
}

// 插入

const d = { val: 'd' }
b.next = d
d.next = c
console.log(JSON.stringify(a))

// 删除
b.next = c
console.log(JSON.stringify(a))


