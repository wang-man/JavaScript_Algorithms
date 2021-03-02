// 去重
const arr = [1, 1, 2, 3, 3]
const arr2 = [...new Set(arr)];
console.log(arr2)


// 判断数组中是否有某元素
const set = new Set(arr);
const has = set.has(4);       // 利用set的has方法
console.log(has)



// 求交集，求arr与arr3的交集
const arr3 = [2, 3]
const set2 = new Set(arr3);
const set3 = new Set(arr2.filter(item => set2.has(item)));    // 结合利用数组的filter及set的has方法
console.log([...set3])