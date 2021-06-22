// 面试题：自己编写instanceof，用来判断一个对象是另一个对象的原型

// 解题思路：利用所学链表的知识点，层层遍历链表，然后结合js原型链的原理，遍历出来的原型链等同于目标对象的prototype就可以
const isInstance = (A, B) => {
  let p = A;        // 先将A的指针给到遍历p
  while (p) {
    if (p === B.prototype) return true;
    p = p.__proto__;
  }
  return false;
}


// 测试
const res = isInstance([], Object);
// const res = isInstance(function () { }, Object);
console.log(res);
