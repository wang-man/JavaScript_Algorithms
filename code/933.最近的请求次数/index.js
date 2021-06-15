// 这题描述不太好理解，得换成自己的方式来理解。
// 比如新成立的一个公司q，开始招收新员工，每个员工的工号以录用上的时间t表示，那就是p = [1月2号,1月10号, 2月21号, 3月18号， 4月7号]....
// 现在p公司为了提高生产力和开源节流，每次招收新员工后将该时间点的三年前的老员工辞退掉，然后计算当前p公司还会有多少员工。


var RecentCounter = function () {
  this.p = [];        // p存储符合某时刻点3000毫秒内的所有请求时间点
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.p.push(t);     // 将每次请求的时间点插入栈
  while (this.p[0] < t - 3000) {    // 遍历首位如果不在3000的请求就去掉。每去掉首位那个，第二位就变成首位，因此这个遍历成立
    this.p.shift();
  }
  console.log(this.p)
  return this.p.length;   // 3000毫秒之内的请求数量
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */


var obj = new RecentCounter()
const p1 = obj.ping(1);
const p2 = obj.ping(100);
const p3 = obj.ping(3001);
const p4 = obj.ping(3002);
const p5 = obj.ping(3102);
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
console.log(p5)